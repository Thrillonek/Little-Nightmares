module.exports = {
  name: "work",
  description: "Zapracujete si pro nějaké ty MarksCoiny.",
  cooldown: 0,
  execute(int, args, client, discord){

    int.followUp({ content: "Just testing" })
  }
}