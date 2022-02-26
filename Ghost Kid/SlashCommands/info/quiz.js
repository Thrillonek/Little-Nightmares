module.exports = {
  name: "quiz",
  description: "Vyzkoušejte si vaše vědomosti.",
  execute(int, args, client, discord){
    
    return int.followUp({ content: "Zatím v progresu!" })
   
    const filter = (m) => int.user.id === m.author.id;

    int.followUp({ content: "Je tento kvíz dobrý?" })

    const collector = int.channel.createMessageCollector({ filter, max: 1 })

    const c = (x, int) => {
      let q1 = false
      const filter = (m) => int.user.id === m.author.id;

        int.channel.createMessageCollector({ filter, max: 1 }).on("collect", (m) => {
        if(m.content.toLowerCase() === x.toString()){
          q1 = true
        }
      })
      
      return q1;
    }
    
    if(c("jo", int) === true) return int.channel.send({ content: "Funguje" })
    
    return int.channel.send({ content: ". "+c("jo", int)})

    collector.on("collect", (m) => {
      if(m.content.toLowerCase() === "ano") q = true;

      const yes = new discord.MessageButton()
      .setStyle("SUCCESS")
      .setLabel("ANO")
      .setCustomId("yes")

      const no = new discord.MessageButton()
      .setStyle("DANGER")
      .setLabel("NE")
      .setCustomId("no")

      const row = new discord.MessageActionRow()
      .addComponents([yes, no])

      m.channel.send({ content: "Chtěl(a) bys změnit tvou odpověď?", components: [row] })
    })
  }
}