const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField('**Bot Name**', ```bot.user.username```)
    .addField('**My Owner**', ```Ban#9153```)
    .addField('**Discord.js**', ```v11.4.2```)
    .addField('**Created On**', ```bot.user.createdAt```)
    .addField('**Servers Bot Is In Them**', ```${client.guilds.size}```)
    .addField('**Watching Member**', ```${client.users.size}```)
    .addField('**Playing With Bots**', ```${client.bots.size}```)
    .addField('**Up Time**', ```${hours} hours, ${minutes} minutes and ${seconds} seconds```)
    

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
