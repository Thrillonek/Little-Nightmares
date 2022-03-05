const { MessageEmbed } = require('discord.js');
const got = require('got');

module.exports = {
    name: 'reddit',
    aliases: ["rpost", "meme", "lnpost"],
    description: "Pošle meme z redditu.",
    execute(message, args, cmd, client) {
        const embed = new MessageEmbed()
        
        if(cmd === 'meme'){
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            embed.setTitle('Tady je meme pro tebe :)')
            embed.setDescription(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            message.channel.send({ embeds: [embed] });
        })};

        if(cmd === 'rpost'){
            if(!args[0]) return message.reply('zadej jméno redditu.')
            const rName = args[0]
            got(`https://www.reddit.com/r/${rName}/random/.json`).then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            embed.setTitle(`Tady je post z redditu ${rName}`)
            embed.setDescription(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            message.channel.send({ embeds: [embed] });
        })} 

        if(cmd === 'lnpost'){
            got(`https://www.reddit.com/r/LittleNightmares/random/.json`).then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            embed.setTitle(`Tady je post z Little Nightmares redditu 😄📺`)
            embed.setDescription(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            message.channel.send({ embeds: [embed] });
        })}
    }
}