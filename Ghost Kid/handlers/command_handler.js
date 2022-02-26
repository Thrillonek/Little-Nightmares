const fs = require('fs');

module.exports = (client, discord) =>{
  const load_dir = (dirs) =>{
    const cmd_files = fs.readdirSync(`./Commands/${dirs}`).filter(file => file.endsWith('.js'));

    for(const file of cmd_files){
      const command = require(`../Commands/${dirs}/${file}`);
      if(command.name){
          client.commands.set(command.name, command);
        } else {
          continue;
        }
    }
  }

  ['fun', 'info'].forEach(x => load_dir(x));
}