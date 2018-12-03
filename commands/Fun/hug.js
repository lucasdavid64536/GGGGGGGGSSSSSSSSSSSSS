let Discord = require('discord.js');

exports.run = (client, message) => {
	
let user = message.mentions.users.first() || message.author;
var embed = new Discord.RichEmbed()
.setTitle("**Cute**")
.addField(`***${message.member.displayName} hugs ${message.mentions.members.first()}***`)
.setColor("RANDOM")
 message.channel.send(embed)
}

module.exports.help = {
	name: "hug",
	alias: "HUG"
}
