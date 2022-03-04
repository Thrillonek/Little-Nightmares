module.exports = {
  name: 'kill',
  execute(message, args, cmd, client, discord, economy){

    let x;
    if(message.mentions.users.first()){
      x = message.mentions.users.first(); 
    } else {
      x = message.author
    }

    const rnd = Math.floor(Math.random() * 10) +1;
  }
}