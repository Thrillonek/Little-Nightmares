const economy = require('../schemas/eco-schema');
const ms = require('ms');
const fs = require("fs");
const cooldowns = new Map();

module.exports = async (client, discord, message) =>{
  const prefix = "!";

  if(message.channel.type === "DM" && message.author.id === "569599819014733856"){
    const user = client.guilds.cache.find(g => g.name === "Little Nightmares").members.cache.find(m => m.user.username.includes(message.content.split(" ")[0].toString()));

    if(!user) return message.reply("Tento člověk není na serveru")


    await economy.updateOne(
      { userID: user.id },
      { $inc: { xp: message.content.split(" ")[1] } }
    )

    message.reply(user.toString());
  }

  if(message.author.bot || !message.guild || message.guild.id == '826767446504767518') return;
  
  if(!await economy.findOne({ userID: message.author.id })){
    await new economy({ userID: message.author.id }).save();
  }

  const leveling = require('../leveling');
  /*if(message.channel.id === "867452473811009586")*/ leveling(message);

  if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
                                                                   
  if(command) command.execute(message, args, cmd, client, discord, economy);
}