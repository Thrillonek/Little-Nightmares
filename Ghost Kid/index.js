const fs = require("fs");

const discord = require('discord.js');
require("dotenv").config();
const client = new discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING"],
  allowedMentions: { parse: ["users", "roles"], repliedUser: true }
});

client.commands = new discord.Collection();
client.cooldown = new discord.Collection();

["command_handler", "event_handler", "slash_handler"].forEach(handler =>{
  require(`./handlers/${handler}`)(client, discord)
});

const keepAlive = require('./server');
keepAlive();

try {
  client.login(process.env.TOKEN);
} catch {
  console.error();
}