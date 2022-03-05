module.exports = {
  name: "random",
  description: "Vygeneruje random číslo.",
  options: [{
    name: "číslo",
    description: "Největší možné vygenerované číslo.",
    type: "NUMBER",
    required: true,
  }],
  execute(int, args, client, discord){
    const num = args.get("číslo").value;
    const rnd = Math.round(Math.random() * num);
    const embed = new discord.MessageEmbed()
    .setTitle("**Random number generator**")
    .setColor("RANDOM")
    .setDescription("Číslo: **"+rnd+"**");

    int.followUp({ embeds: [embed] })
  }
}