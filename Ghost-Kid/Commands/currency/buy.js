const fs = require('fs');

module.exports = {
  name: 'buy',
  aliases: [],
  async execute(message, args, cmd, client, discord, economy){

    if(!args[0]) return message.lineReply('Napiš, co si chceš koupit!');

    let shop_data = JSON.parse(Buffer.from(fs.readFileSync('./shop.json')).toString());
    let temp_items = Object.keys(shop_data.pages)
    .map(v => shop_data.pages[v].items);
    let items = [];

    temp_items.forEach(tmp_items => {
      items = items.concat(tmp_items)
    });
    let item = items.find(v => v.name === args[0].toLowerCase());

    if(!item){
      return message.lineReply("Tento item nebyl nalezen");
    }

    const check = await economy.findOne({ userID: message.author.id });

    if(check.coins < item.cost){
      return message.lineReply('Na tento item nemáš peníze!');
    } else {
      await economy.updateOne(
        { userID: message.author.id },
        { 
          "$inc": { "coins": -item.cost },
          "$push": { "inv": item }
        }
      )
    }
    message.channel.send({ embeds: [
      new discord.MessageEmbed({ description: `Právě sis koupil(a) ${item.name}!`, color: 'GREEN' })
    ] });
  }
}