module.exports = {
  name: 'pp',
  description: 'Ukáže vám velikost vašeho pp (ehm).',
  execute(int, args, client, discord){

    let text = '';

    const rnd = Math.floor(Math.random() * 16);

    for(let i=0; i<rnd; i++){
      text += '='
    }

    const embed = new discord.MessageEmbed()
    .setTitle('**Peepee stroj**')
    .setDescription('Velikost tvojeho peepee:\n\n8'+text+'D')
    .setColor('RANDOM');

    int.followUp({ embeds: [embed] })
  }
}