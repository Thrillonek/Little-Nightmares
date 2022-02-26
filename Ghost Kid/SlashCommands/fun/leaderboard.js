module.exports = {
  name: "leaderboard",
  description: "Žebříček největších boháčů na MarksCoiny (řadí podle peněz v bance)!",
  async execute(int, args, client, discord, db){

    const members = await db
    .find({})
    .sort({ xp: -1 })
    .limit(10);

    let lb = ``

    for(let i=0; i<members.length; i++){
      const { userID, xp = 0 } = members[i];

      let user = int.guild.members.cache.get(userID).nickname;
      if(!user) user = int.guild.members.cache.get(userID).user.username;

      lb += `**#${i+1} | ${user}** má ${xp.toLocaleString(1)}XP (Level ${members[i].levels})!\n\n`
    }
                                                                                                      
    const embed = new discord.MessageEmbed()
    .setTitle('**Leaderboard**')
    .setColor('#00ff5a')
    .setDescription(lb.toString());

    int.followUp({ embeds: [embed] })
  }
}