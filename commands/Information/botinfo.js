const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField('**Bot Name**', bot.user.username)
    .addField('**My Owner**',"```Ban#9153```")
    .addField('**Discord.js**',"```v11.4.2```")
    .addField('Node.js',"```v10.13.0```")
    .addField('**xBot#3901 was Created on Dec-11-2017**', `**bot.user.createdAt**`)
    .addField('**Servers Bot Is In Them**',)
    .addField('**Watching Member**',)
    .addField('**Playing With Bots**',)
    .addField('**Up Time**', `${hours} hours, ${minutes} minutes and ${seconds} seconds`)
    

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
