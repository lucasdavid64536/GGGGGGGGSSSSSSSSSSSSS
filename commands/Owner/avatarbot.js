let Discord = require('discord.js');
exports.run = (client, message) => {

    let messageArray = message.content.split(" ");
    let command = messageArray[0]
    if(!command.startsWith(clientSettings.prefix)) return;
    const args = messageArray.slice(1);
    let botmessage = args.join(" ");
    if(message.author.id !== '404950596043669545') return message.reply("Only my owner can use this!!");


    let image = message.attachments.first().url;


    bot.user.setAvatar(image);

    let iEmbed = new Discord.RichEmbed()
        .setAuthor('✅ Photo altered successfully')
        .setColor('#1E90FF')
        .addField("Your message 1", "your message 2")
    message.channel.send(iEmbed)
}
module.exports.help = {
	name: "set",
	alias: "SET",		
}
