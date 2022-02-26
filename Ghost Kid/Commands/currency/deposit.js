const economy = require('../../schemas/eco-schema');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'deposit',
  aliases: ["dep"],
  description: 'Deposit do banky',
  async execute(message, args){

    const amount = args[0]

    const check = await economy.findOne(
      { userID: message.author.id }
    );

    const embed = new MessageEmbed()
    .setTitle('**Deposit**')
    .setDescription(`${message.author.username}, vložil(a) jsi do banky ${amount} <:MarksCoin:869261184157773855>`)
    .setColor('GREEN');

    const cembed = new MessageEmbed()
    .setTitle('**Deposit**')
    .setDescription(`${message.author.username}, vložil(a) jsi do banky ${check.coins} <:MarksCoin:869261184157773855>`)
    .setColor('GREEN');
          
    if(!check){
      const user = {
        userID: message.author.id,
        serverID: message.guild.id,
        coins: 0,
        bank: 0,
      }

      await new economy(user).save()
    }
    if(check.coins < amount) return message.reply({ content: 'Nemůžeš do banky vložit více peněz, než máš v peněžence!' });

    if(args[0] == 'all'){
      const result = await economy.findOneAndUpdate(
        { userID: message.author.id, },
        { $inc: { coins: -check.coins, bank: check.coins },}
      );
      message.channel.send({ embeds: [cembed] })
    } else {
      const result = await economy.findOneAndUpdate(
        { userID: message.author.id, },
        { $inc: { coins: -amount, bank: amount },}
      );
      message.channel.send({ embeds: [embed] });
    }
  } 
}