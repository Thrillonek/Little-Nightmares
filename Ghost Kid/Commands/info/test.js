const db = require('../../schemas/eco-schema');
const canva = require("canvas");

module.exports = {
  name: 'test',
  async execute(message, args, cmd, client, discord, db){
    if(message.author.id != "569599819014733856") return;

    /*const draw = canva.getContext("2d");
    draw.fillRect(0,0,100,100)

    message.channel.send({ files: [new discord.MessageAttachment(draw, "test.png")] })*/
  }
}