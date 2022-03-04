const { MessageEmbed, ReactionCollector } = require('discord.js')

module.exports = {
  name: 'help',
  description: 'Reaction based help command',
  execute(message){
    return;
    const embed = new MessageEmbed({ title: '**Help**', color: 'AQUA'})
    .addFields(
      {name: 'Economy příkazy', value: 'Zareaguj na 💵'},
      {name: 'Zábavné příkazy', value: 'Zareaguj na 😆' },
      {name: 'Zpět na toto menu', value: 'Zareaguj na 📃'}
    );

    const economy = new MessageEmbed({ title: '**Economy Help**', color: 'AQUA' })
    .addFields(
      {name: 'Bal', value: 'Ukáže zůstatek ve tvé peněžence a bance'},
      {name: 'Work', value: 'Zapracuješ pro nějaké ty peníze'},
      {name: 'Deposit {počet}', value: 'Vložíš {počet} peněz do tvojí banky'},
      {name: 'Withdraw {počet}', value: 'Vybereš {počet} peněz ze tvojí banky'},
      {name: 'Leaderboard', value: 'Ukáže 10 nejbohatších členů serveru'}
    );

    const fun = new MessageEmbed({ title: '**Fun Help**', color: 'AQUA'})
    .addFields(
      {name: 'Rank', value: 'Ukáže vám, vaše XP a level za zprávy'},
      {name: 'Meme', value: 'Pošle meme z redditu r/memes'},
      {name: 'Lnpost', value: 'Pošle post z redditu r/LittleNightmares'},
      {name: 'Rpost {reddit}', value: 'Pošle post ze zvoleného redditu'}
    );

    message.channel.send({ embeds: [embed] }).then(async (msg) =>{
      await msg.react('💵');
      await msg.react('😆');
      await msg.react('📃');

      const filter = (reaction) => msg.author.id == '839082890595794985';

      const collector = new ReactionCollector(msg, filter, {});
      collector.on("collect", (reaction, user) =>{
        reaction.users.remove(user.id);
        switch(reaction.emoji.name){
          case "💵":
            msg.edit({ embeds: [economy] });
            break;
          case "😆":
            msg.edit({ embeds: [fun] });
            break;
          case "📃":
            msg.edit({ embeds: [embed] });
            break;
        }
      })
    })
  }
}