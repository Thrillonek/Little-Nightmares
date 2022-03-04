module.exports = {
    name: "question",
    execute(message, args, cmd, client, discord, economy){

        var embed = new discord.MessageEmbed()
        .setTitle("Otázka")
        .setDescription("Je Thrillonek dobrý developer?")

        var row = new discord.MessageActionRow()
        .addComponents([
            new discord.MessageButton().setLabel("Ano"),
            new discord.MessageButton().setLabel("Ne"),
            new discord.MessageButton().setLabel("Možná")
        ])

        message.reply({ embeds: [embed], components: [row] })
    }
}