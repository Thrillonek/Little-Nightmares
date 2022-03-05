module.exports = {
  name: 'balance',
  description: 'Ukáže vám váš zůstatek v peněžence a v bance.',
  options: [
    {
      name: "člen",
      description: 'Člen, od kterého zůstatek bude (pokud nechcete vědět svůj)',
      type: "USER",
      required: false,
    }
  ],
  async execute(int, args, client, discord, db){

    let u = int.member;
    let avatar = int.user.displayAvatarURL({ dynamic: true });

    if(args.get("člen", false)){
      u = int.guild.members.cache.find(m => m == args.get("člen", false).value);
      avatar = u.user.displayAvatarURL({ dynamic: true }); 
    }

    const result = await db.findOne({ userID: u.id })
    if(!result){
      const user = {
        userID: u.id,
        serverID: int.guild.id,
        coins: 0,
        bank: 0,
      }

      await new db(user).save()
    } else {
      const embed = new discord.MessageEmbed()
      .setTitle('**Balance**')
      .setDescription(`**Peněženka:** ${result.coins} <:coin:903352954956947458>\n\n**Banka:** ${result.bank} <:coin:903352954956947458>`)
      .setColor('GREEN')
      .setThumbnail(avatar.toString())
      int.followUp({ embeds: [embed] })
    }
  }
}