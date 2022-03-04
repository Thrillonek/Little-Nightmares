module.exports = {
  name: 'inventory',
  aliases: ["inv"],
  async execute(message, args, cmd, client, discord, economy){

    const check = await economy.findOne({ userID: message.author.id });

    let temp_items = check.inv.map(item => item.name);
    let items = [];

    temp_items.forEach(itemName => {
      if(!items.find(v => v.name === itemName)){
        items.push({
          amount: temp_items.filter(temp_item => temp_item === itemName).length,
          name: itemName
        });
      }
    });

    items = items.map(item => `**${item.name}** x\`${item.amount}\``)
    if(!items) return message.reply({ content: 'Momentálně máš prázdný inventář!' })

    const inventory = new discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle("Inventory")
    .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
    .setDescription(`${items.join('\n\t')}`)

    await message.channel.send(inventory);

  }
}