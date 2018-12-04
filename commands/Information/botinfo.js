const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("**Bot Information**")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("**• Bot Name**", bot.user.username)
    .addField("**• Created On**", bot.user.createdAt)
    .addField("**• Mem Usage**", "145.35 / 1956.89 MB")
    .addField("**• Node.js:**", "v10.13.0")
    .addField("**• Discord.js:**","v11.4.2")
    .addField("**• Servers**", `${bot.guilds.size}`)
    .addField("**• Members**", `${bot.users.size}`)
    .addField("**• Commands**", `${bot.commands.size}`)

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
