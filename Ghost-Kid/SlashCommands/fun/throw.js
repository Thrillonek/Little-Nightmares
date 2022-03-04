module.exports = {
  name: 'throw',
  description: 'Hodíte předmět na jiného člena.',
  options: [
    {
      name: "člen",
      description: 'Člen, po kterém něco chceš hodit.',
      required: true,
      type: "USER",
    }
  ],
  execute(int, args, client, discord){

    const words = ["dort", "kámen", "kočku", "bagr", "Godotovu holi", "Marksův klobouk", "kačenu", "Guesta", "okurku", "květináč", "meloun", "neidentifikovatelný předmět", "XM214", "flašku rumu", "knihu", "rybu", "banán", "Nomíka", "Citru**z**e", "bota"];
    const rnd = Math.floor(Math.random() * words.length) +1;

     const embed = new discord.MessageEmbed()
    .setTitle('**Throw**')
    .setDescription('<@'+int.member.id+'> hodil(a) '+words[rnd]+' po <@'+args.get("člen").value+'>')
    .setColor('RANDOM')

    int.followUp({ embeds: [embed] });
  }
}