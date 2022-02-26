module.exports = {
  name: 'balance',
  aliases: ["bal"],
  async execute(message, args, cmd, client, discord, economy){

    let u = message.member;
    let avatar = message.author.displayAvatarURL({ dynamic: true });

    const result = await economy.findOne({ userID: u.id })
    if(!result){
      const user = {
        userID: u.id,
        serverID: message.guild.id,
        coins: 0,
        bank: 0,
      }

      await new economy(user).save()
    } else {
      const embed = new discord.MessageEmbed()
      .setTitle('**Balance**')
      .setDescription(`**Peněženka:** ${result.coins} <:MarksCoin:869261184157773855>\n\n**Banka:** ${result.bank} <:MarksCoin:869261184157773855>`)
      .setColor('GREEN')
      .setThumbnail(avatar.toString())
      message.channel.send({ embeds: [embed] })
    }
  }
}