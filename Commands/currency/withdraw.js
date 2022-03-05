const economy = require('../../schemas/eco-schema');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'withdraw',
  aliases: ["wd"],
  description: 'Withdraw z banky',
  async execute(message, args){

    const amount = args[0]

    const check = await economy.findOne(
      { userID: message.author.id }
    )
    if(!check){
      const user = {
        userID: message.author.id,
        serverID: message.guild.id,
        coins: 0,
        bank: 0,
      }

      await new economy(user).save()
    }
    if(check.bank < amount) return message.reply({ content: 'Nemůžeš z banky vyjmout více peněz, než v ní máš!' });
    const embed = new MessageEmbed()
    .setTitle('**Withdraw**')
    .setDescription(`${message.author.username}, z banky jsi vzal(a) ${amount} <:MarksCoin:869261184157773855>.`)
    .setColor('GREEN');

    const cembed = new MessageEmbed()
    .setTitle('**Withdraw**')
    .setDescription(`${message.author.username}, z banky jsi vzal(a) ${check.bank} <:MarksCoin:869261184157773855>.`)
    .setColor('GREEN');

    const result = await economy.findOneAndUpdate(
      { userID: message.author.id, },
      { $inc: { coins: amount, bank: -amount },}
    )

    if(args[0] == 'all'){
      const result = await economy.findOneAndUpdate(
        { userID: message.author.id, },
        { $inc: { coins: check.coins, bank: -check.coins },}
      );
      message.channel.send({ embeds: [cembed] });
    } else {
      const result = await economy.findOneAndUpdate(
        { userID: message.author.id, },
        { $inc: { coins: amount, bank: -amount },}
      );
      message.channel.send({ embeds: [embed] });
    }
  } 
}