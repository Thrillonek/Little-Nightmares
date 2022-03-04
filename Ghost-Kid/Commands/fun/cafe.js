module.exports = {
  name: "cafe",
  execute(message, args, cmd, client, discord, db){
    message.channel.send({ content: "Tady je tvoje kafe! ☕"})
  }
}