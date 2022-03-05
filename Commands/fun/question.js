module.exports = {
    name: "question",
    execute(message, args, cmd, client, discord, economy){

        var embed = new discord.MessageEmbed()
        .setTitle("Otázka")
        .setDescription("Je Thrillonek dobrý developer?")

        var row = new discord.MessageActionRow()
        .addComponents([
            new discord.MessageButton().setLabel("Ano").setStyle("PRIMARY").setCustomId("ano"),
            new discord.MessageButton().setLabel("Ne").setStyle("PRIMARY").setCustomId("ne"),
            new discord.MessageButton().setLabel("Možná").setStyle("PRIMARY").setCustomId("mozna")
        ])

        message.reply({ embeds: [embed], components: [row] })
    }
}