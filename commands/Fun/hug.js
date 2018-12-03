let Discord = require('discord.js');

exports.run = (client, message) => {
	
let user = message.mentions.users.first() || message.author;
	
message.reply(`***${message.member.displayName} hugs ${message.mentions.members.first()}***`)
}

module.exports.help = {
	name: "hug",
	alias: "HUG"
}
