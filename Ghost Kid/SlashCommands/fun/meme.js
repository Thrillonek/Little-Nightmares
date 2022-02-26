const got = require('got');

module.exports = {
  name: 'meme',
  description: 'Pošle meme z redditu.',
  execute(int, args, client, discord){

    got('https://www.reddit.com/r/memes/random/.json').then(response => {
      let content = JSON.parse(response.body);
      let permalink = content[0].data.children[0].data.permalink;
      let memeUrl = `https://reddit.com${permalink}`;
      let memeImage = content[0].data.children[0].data.url;
      let memeTitle = content[0].data.children[0].data.title;
      const embed = new discord.MessageEmbed();
      embed.setTitle('Tady je meme pro tebe :)')
      embed.setDescription(`${memeTitle}`)
      embed.setURL(`${memeUrl}`)
      embed.setImage(memeImage)
      embed.setColor('RANDOM')
      int.followUp({ embeds: [embed] });
    });
  }
}