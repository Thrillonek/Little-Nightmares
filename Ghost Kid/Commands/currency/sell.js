const fs = require('fs');

module.exports = {
  name: 'sell',
  async execute(message, args, cmd, client, discord, economy){

    if(!args[0]) return message.reply({ content: 'Napiš, co chceš prodat!' });

    const check = await economy.findOne({ userID: message.author.id });

    let shop_data = JSON.parse(Buffer.from(fs.readFileSync('./shop.json')).toString());
    let item = check.inv.find(i => i.name === args[0].toLowerCase());

    if(!item) return message.reply({ content: 'Tento item jsem ve tvém inventáři nenašel!' });

    await economy.updateOne(
      { userID: message.author.id },
      {
        "$inc": { "coins": Math.round(item.cost * 2/3) },
        "$pull": { "inv": item }
      }
    )
    message.channel.send({ embeds: [
      new discord.MessageEmbed({ description: `Prodal(a) jsi ${item.name} a získal(a) jsi ${Math.round(item.cost * 2/3)} <:MarksCoin:869261184157773855>`, color: 'GREEN' })
    ] });
  }
}