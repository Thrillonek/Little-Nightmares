const Canvas = require("canvas");
const assets = require("@canvacord/assets");

module.exports = {
  name: 'rank',
  async execute(message, args, cmd, client, discord, economy){

    let u = message.member;
    let avatar = message.author.displayAvatarURL({ dynamic: true });

    let result = await economy.findOne({ userID: message.member.id })

    if(!result){
      const user = {
        userID: u.id,
      }
      await new economy(user).save()
    } else {
      const rc = (role) => u.roles.cache.find(r => r.name === role);

      let rank = '#FFD100'
      if(rc('Runaway kids')){
        rank = '#A26EDF'
      }
      if(rc('Guests')){
        rank = '#C06C59'
      }
      if(rc('Viewers')){
        rank = '#3667BE'
      }
      if(rc('Visitors')){
        rank = '#7F8CB4'
      }
      if(rc('Pretenders')){
        rank = '#659B93'
      }
      if(rc('Six')){
        rank = 'YELLOW'
      }

      var array = [];
      var check = 0;
      
      for(let i = 0; i <= result.levels; i++){
        var count = i * 100 +75;
        array.push(count);
      }
      array.forEach(a => check += a);
      array = [];

      var lb = await economy.find({}).sort({ xp: -1 });
      var uRank;

      for(let i = 0; i < lb.length; i++){
        if(lb[i].userID === u.id) uRank = i+1;
      }

      let level = result.levels;
      let limit = 0;
      for(let i = 0; i <= level-1; i++){
        var count = i * 100 +75;
        array.push(count);
      }
      array.forEach(a => limit += a);
      
      let xp = result.xp - limit
      limit = check - limit;
      let xpBar = (limit - (limit - xp)) / limit * 460;

      function calc(num) {
        num = num.toString().replace(/[^0-9.]/g, '');
        if (num < 1000) {
            return num;
        }
        let si = [
          {v: 1E3, s: "K"},
          {v: 1E6, s: "M"},
          {v: 1E9, s: "B"},
          {v: 1E12, s: "T"},
          {v: 1E15, s: "P"},
          {v: 1E18, s: "E"}
        ];
        let index;
        for (index = si.length - 1; index > 0; index--) {
            if (num >= si[index].v) {
                break;
            }
        }
        return (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
      }

      const member = message.mentions.members.last() || message.member;
      
      Canvas.registerFont("./fonts/arial.ttf", { family: "Arial" })
      const canvas = Canvas.createCanvas(800, 250);
      const ctx = canvas.getContext('2d');

      
      //POZADÍ
      ctx.fillStyle = "#614900";
      ctx.fillRect(0,0,canvas.width, canvas.height);
      ctx.strokeStyle = "#FFE000";
      var grd = ctx.createLinearGradient(0,0,300,0);
      grd.addColorStop(0, rank);
      grd.addColorStop(2, "#614900");
      ctx.fillStyle = grd;
      ctx.fillRect(0,0,300,250)
      ctx.lineWidth = 10;
      ctx.strokeRect(0,0,canvas.width, canvas.height)

      //PROGRESS BAR
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(190, 105);
      ctx.lineTo(650, 105);
      ctx.quadraticCurveTo(675, 105, 675, 125);
      ctx.quadraticCurveTo(675, 145, 650, 145);
      ctx.lineTo(190, 145);
      ctx.strokeStyle = "#00F";
      ctx.stroke();
      ctx.fillStyle = "#FFF";
      ctx.fill();
      ctx.closePath();

      //XP V PROGRESS BARU
      ctx.beginPath();
      ctx.moveTo(190, 105);
      ctx.lineTo(190+xpBar, 105);
      ctx.quadraticCurveTo(190+xpBar+25, 105, 190+xpBar+25, 125);
      ctx.quadraticCurveTo(190+xpBar+25, 145, 190+xpBar, 145);
      ctx.lineTo(190, 145);
      ctx.fillStyle = "#F00";
      ctx.fill();
      ctx.fillStyle = "#FFF";
      ctx.font = "25px Arial"
      ctx.fillText(`${calc(result.xp)} / ${calc(check)} XP`, 210, 175);
      ctx.closePath();

      //JMÉNO
      ctx.beginPath();
      ctx.fillStyle = "#000";
      ctx.font = "35px Arial";
      ctx.fillText(`${message.author.username}     #${message.author.discriminator}`, 215, 95);
      ctx.closePath();

      //RANK, LEVEL
      ctx.fillStyle = "#FFF";
      ctx.fillText(`Level  ${level}`, 600, 230)
      ctx.fillText(`Rank  ${uRank}`, 400, 230)

      //PFP
      ctx.beginPath();
      ctx.arc(125, 125, 75, 0, Math.PI*2);
      ctx.strokeStyle = "#F00"
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.arc(125, 125, 75, 0, Math.PI*2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(await Canvas.loadImage(member.user.displayAvatarURL({ format: "png" })), 50, 50, 150, 150)

      const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'Rank.png');

      message.channel.send({ files: [attachment] });
    }
  }
}