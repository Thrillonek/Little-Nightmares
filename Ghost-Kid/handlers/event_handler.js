const fs = require('fs');

module.exports = (client, discord) =>{
  const event_files = fs.readdirSync(`./Events`).filter(file => file.endsWith('.js'));

  for(const file of event_files){
    const event = require(`../Events/${file}`);
    const event_name = file.split('.')[0];
    client.on(`${event_name}`, event.bind(null, client, discord))
  }
}