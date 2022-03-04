module.exports = {
  name: 'hunt',
  description: 'Lov na nějakou zvěř.',
  options: [
    {
      name: "možnosti",
      description: "Info o šancích na chycení zvěře.",
      type: "STRING",
      required: false,
      choices: [
        { name: "info", value: "0" },
      ]
    },
  ],
  execute(int, args, client, discord){

    const info = new discord.MessageEmbed()
    .setTitle('**Hunt Info**')
    .setColor('#ff5500')
    .setDescription('Šance na jednotlivé zvířata:\n\n**Kráva:** 50%\n**Zajíc:** 25%\n**Jelen:** 15%\n**Veverka:** 9%\n**Panda:** 1%');

    if(args.get("možnosti", false) && args.get("možnosti", false).value == "0"){
      return int.followUp({ embeds: [info] })
    }

    const rnd = Math.floor(Math.random() * 100) +1;

    const embed = new discord.MessageEmbed()
    .setTitle('**Hunt**')
    .setColor('#ff5500');

    let animal;
    if(rnd < 51 && rnd > 0){
      animal = 'krávu'
    } else if(rnd < 76 && rnd > 50){
      animal = 'zajíce'
    } else if(rnd < 91 && rnd > 75){
      animal = 'jelena'
    } else if(rnd < 100 && rnd > 90){
      animal = 'veverku'
    } else if(rnd == 100){
      animal = 'pandu'
    }

    embed.setDescription('Gratuluji! Chytil(a) jsi '+animal+'!');

    int.followUp({ content: 'Právě číháš na zvířata!' }).then((msg) =>{
      setTimeout(() => {
        int.channel.send({ embeds: [embed] });
        msg.delete();
      }, 5000)
    });
  }
}