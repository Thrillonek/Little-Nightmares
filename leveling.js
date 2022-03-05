const economy = require('./schemas/eco-schema');

module.exports = async (message) =>{
  const banned = ["851195816223309874", "851211985218830346", "851866881702232114", "851210879445893140", "900818659805638657"];
  if(banned.some(b => message.member.roles.cache.get(b))) return;

  const result = await economy.findOne({ userID: message.author.id });
  if(!result){
    await new economy({ userID: message.author.id }).save();
  }
  const randomnum = Math.floor(Math.random() * 25) +15;
  const neededFunction = (levels) => {
    var array = [];
    var check = 0;
    
    for(let i = 0; i <= levels; i++){
      var count = i * 100 +75;
      array.push(count);
    }
    array.forEach(a => check += a);

    return check;
  }
  const update = await economy.findOneAndUpdate(
    { userID: message.author.id },
    { userID: message.author.id, $inc: { xp: randomnum } },
    { upsert: true, new: true }
  );
  let { levels, xp } = update;
  const needed = neededFunction(levels)

  if(xp >= needed){

    await economy.findOneAndUpdate(
      { userID: message.author.id },
      { userID: message.author.id, $inc: { levels: 1 } }
    );

    const main = levels +1;
    const role = (roleToGet) => message.guild.roles.cache.find(r => r.name === roleToGet);
    const channel = message.guild.channels.cache.get("851507187880689684");

    if(main == 10){
      channel.send({ content: `<@${message.author.id}>, dosáhl(a) jsi levelu ${main}, se kterým získáváš roli Runaway kid!` });
      message.member.roles.add(role('Runaway kids'));
    } else if(main == 20){
      channel.send({ content: `<@${message.author.id}>, dosáhl(a) jsi levelu ${main}, se kterým získáváš roli Guest!` });
      message.member.roles.remove(role('Runaway kids'));
      message.member.roles.add(role('Guests'));
    } else if(main == 30){
      channel.send({ content: `<@${message.author.id}>, dosáhl(a) jsi levelu ${main}, se kterým získáváš roli Viewer!` });
      message.member.roles.remove(role('Guests'));
      message.member.roles.add(role('Viewers'));
    } else if(main == 40){
      channel.send({ content: `<@${message.author.id}>, dosáhl(a) jsi levelu ${main}, se kterým získáváš roli Visitor!` });
      message.member.roles.remove(role('Viewers'));
      message.member.roles.add(role('Visitors'));
    } else if(main == 50){
      channel.send({ content: `<@${message.author.id}>, dosáhl(a) jsi levelu ${main}, se kterým získáváš roli Pretender!` });
      message.member.roles.remove(role('Visitors'));
      message.member.roles.add(role('Pretenders'));
    } else if(main == 60){
      channel.send({ content: `<@${message.author.id}>, dosáhl(a) jsi levelu ${main}, se kterým získáváš roli Six!` });
      message.member.roles.remove(role('Pretenders'));
      message.member.roles.add(role('Six'));
    } else {
      channel.send({ content: `<@${message.author.id}>, dosáhl(a) jsi levelu ${main}!` });
    }
  }
}