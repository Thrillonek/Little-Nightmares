const fs = require("fs");

module.exports = (client, discord, int) => {
  if(int.isButton()){
    if(int.customId === "help"){
      let embed;
      let eco = "";
      let fun = "";
      let info = "";
      function loop(dir){
        const files = fs.readdirSync("../Commands/"+dir).filter(f => f.endsWith(".js"));
        for(let file of files){
          const command = require("../Commands/"+dir+"/"+file);
          if(dir === "currency" && command.name){
            eco += "**"+command.name+":**"+command.desc+"\n"
          } else if(dir === "fun" && command.name){
            fun += "**"+command.name+":**"+command.desc+"\n"
          } else if(dir === "info" && command.name){
            info += "**"+command.name+":**"+command.desc+"\n"
          }
        }
      }
      embed = new discord.MessageEmbed()
      .setTitle("__Help__")
      .setColor("YELLOW")
      .addFields([
        { name: "Currency", value: `d${eco}` },
        { name: "Fun", value: `d${fun}` },
        { name: "Info", value: `d${info}` }
      ])
      int.message.edit({ embeds: [embed] });
    }
  }
}