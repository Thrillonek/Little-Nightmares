module.exports = async (client, discord, reaction, user) =>{
  if(reaction.message.partial) await reaction.message.fetch();
  if(reaction.partial) await reaction.fetch();
  if(user.bot) return;
  if(!reaction.message.guild) return;

  if(reaction.message.channel.id === "867452473811009586" && reaction.emoji.name === "🎨"){
    var role = reaction.message.guild.roles.cache.get("946847431247687711");
    var member = reaction.message.guild.members.cache.get(user.id);
    member.roles.add(role);
  }
}