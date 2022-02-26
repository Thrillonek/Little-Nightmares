const mongoose = require('mongoose');

module.exports = async (client, discord) =>{
  console.log(`${client.user.username} je ready!`);

  let check = 0;

  client.user.setPresence({
    status: "idle",
    activities: [{
      type: "PLAYING",
      name: "Little Nightmares."
    }]
  })
  
  await mongoose.connect(process.env.mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  console.log('Připojeno k MongoDB!')
}