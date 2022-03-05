const fs = require('fs');

module.exports = {
  name: "shop",
  async execute(message, args, cmd, client, discord){
    let shop_data = JSON.parse(Buffer.from(fs.readFileSync('./shop.json')).toString());
    let index = (args[0] || "1");
    let page = shop_data.pages[index];

    if(!page) {
      return message.channel.send({ content: "Tato stránka nebyla nalezena <:MarksSad:831463591089405972>" })
    }

    const shop = new discord.MessageEmbed()
    .setTitle("Shop")
    .setColor("GREEN");

    for(let item of page.items){
      shop.addField(item.name, `Popis: \`${item.desc || "Žádný"}\`\nCena: \`${item.cost + "<:MarksCoin:869261184157773855>" || "Thrillonek jí zapomněl zmínit..."}\``);
    }

    await message.channel.send({ embeds: [shop] });

  }
}