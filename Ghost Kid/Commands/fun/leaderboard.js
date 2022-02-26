const db = require('../../schemas/eco-schema');
const { MessageEmbed } = require('discord.js');
const Canvas = require("canvas");

module.exports = {
  name: 'leaderboard',
  aliases: ["lb"],
  async execute(message, args, cmd, client, discord){

    Canvas.registerFont("./fonts/arial.ttf", { family: "Arial" });
    const canvas = Canvas.createCanvas(1350,1000)
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#FFCC00"
    ctx.fillRect(0,0,800,1000);

    ctx.fillStyle = "#444";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#555";
    for(let i = 0; i <= 800; i += 200){
      ctx.fillRect(0, i, 1350, 100);
    }

    const members = await db
    .find({})
    .sort({ xp: -1 })

    let lb = ``

    ctx.font = "80px Calibri";
    ctx.fillStyle = "#FC0";
    ctx.fillText(`#1`, 130, 80);
    ctx.fillStyle = "#AAA";
    ctx.fillText(`#2`, 130, 180);
    ctx.fillStyle = "#DD5F32";
    ctx.fillText(`#3`, 130, 280);
    ctx.fillStyle = "#000";


    for(let i = 4; i <= 10; i++){
      ctx.fillText(`#${i}`, 130, i*100-20);
    }

    ctx.fillStyle = "#000";
    ctx.font = "60px Arial";

    for(let i = 1; i < 11; i++){

      var { levels, userID, xp = 0 } = members[i-1];

      let user = message.guild.members.cache.get(userID);    
      if(!user){
        await db.updateOne(
          { userID: userID },
          { levels: 25, xp: 31980 },
        )
        continue;
      }
      var img = await Canvas.loadImage(user.user.displayAvatarURL({ format: "png" })) 
      user = user.user.username;

      ctx.beginPath();
      ctx.fillText(`${user}  •  Level  ${levels}`, 300, (i*100)-30);
      ctx.drawImage(img, 0, (i*100)-100, 100, 100);
      ctx.closePath();

      lb += `**#${i} | ${user}** má ${xp.toLocaleString(1)}XP (Level ${levels})!\n\n`
    }

    const attachment = new discord.MessageAttachment(canvas.toBuffer(), "Leaderboard.png");

    const embed = new discord.MessageEmbed()
    .setTitle('**Leaderboard**')
    .setColor('#00ff5a')
    //.setDescription(lb.toString())
    .setImage("attachment://Leaderboard.png")

    message.channel.send({ embeds: [embed], files: [attachment] })
  }
}