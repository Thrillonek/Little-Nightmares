const db = require('../../schemas/eco-schema');
const canva = require("canvas");

module.exports = {
  name: 'test',
  async execute(message, args, cmd, client, discord, db){
    if(message.author.id != "569599819014733856") return;

    message.channel.messages.fetch({ limit: 1 }).then(msg => {
      msg.react("🎨");
    })
  }
}