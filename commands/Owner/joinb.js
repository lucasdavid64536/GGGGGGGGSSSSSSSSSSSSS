const Discord = require("discord.js")

module.exports = (client, guild) => {
    let guildCreateJoin = client.channels.get('517388949048655892');
    let joinEmbed = new Discord.RichEmbed()
    .setTitle("Bot left server!")
    .setThumbnail(guild.iconURL)
    .addField(`Server Name:`, `${guild.name}`)
    .addField(`Server ID:`, `${guild.id}`)
    .addField(`Server Owner:`, `${guild.owner}`)
    .setColor("#4286f4")
    .setFooter(`${client.config.botname}`)
    .setTimestamp();
    guildCreateJoin.send(joinEmbed);
}
