const Discord = require("discord.js")

module.exports = (client, guild) => {
    let guildCreateDelete = client.channels.get('517388949048655892');
    let leaveEmbed = new Discord.RichEmbed()
    .setTitle("Bot left server!")
    .setThumbnail(guild.iconURL)
    .addField(`Server Name:`, `${guild.name}`)
    .addField(`Server ID:`, `${guild.id}`)
    .addField(`Server Owner:`, `${guild.owner}`)
    .setColor("#4286f4")
    .setFooter(`${client.config.botname}`)
    .setTimestamp();
    guildCreateDelete.send(leaveEmbed);
}
