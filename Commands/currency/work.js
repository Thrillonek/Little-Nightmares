module.exports = {
  name: 'work',
  description: 'Work command',
  cooldown: 300,
  async execute(message, args, cmd, client, discord, economy){

    const locations = ["kavárna", "pekárna", "restaurace", "staveniště", "kadeřnictví", "nemocnice", "továrna", "elektrárna"]

    const chosen = locations.sort(() => Math.random() - Math.random()).slice(0, 3);

    message.channel.send({ embeds: [
      new discord.MessageEmbed({ title: '**Work**' }).setDescription(`Napiš do tohoto kanálu kde chceš pracovat!\n\nMožnosti: \`${chosen.join("` `")}\``).setColor('GREEN')
    ] }).then(async (msg) => {

      const filter = (m) => {
        return chosen.some((answer) => answer.toLowerCase() === m.content.toLowerCase()) && m.author.id === message.author.id;
      } 

      const collector = await message.channel.createMessageCollector({ filter, max: 1, time: 300000 })

      collector.on("collect", async (m) =>{
        const randomNumber = Math.floor(Math.random() * 25) + 25;

        const embed = new discord.MessageEmbed()
        .setTitle('**Work**')
        .setDescription(`${message.author.username}, pracoval(a) jsi, a získal(a) jsi ${randomNumber} <:MarksCoin:869261184157773855>!`)
        .setColor('GREEN');

        const check = await economy.findOne({ userID: message.author.id })
        if(!check){
          const user = {
            userID: message.author.id,
            serverID: message.guild.id,
            coins: 0,
            bank: 0,
          }

          await new economy(user).save()
        }

        message.channel.send({ content: 'Právě pracuješ...' }).then((msm) =>{
          setTimeout(async () => {
            msm.delete();
            msm.channel.send({ embeds: [embed] })
            
            await economy.findOneAndUpdate(
              { userID: message.author.id, },
              { $inc: { coins: randomNumber, },}
            )
          }, 7000)
        })

        setTimeout(() =>{
          msg.delete();
          m.delete();
        }, 1000)
      })
    })
  }
}