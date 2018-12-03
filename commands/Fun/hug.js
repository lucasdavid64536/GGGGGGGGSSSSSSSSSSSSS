let Discord = require('discord.js');

exports.run = (client, message) => {

message.reply(`${message.member.displayName} is hugging ${message.mentions.members.first()}`)

}

module.exports.help = {
	name: "hug",
	alias: "HUG"
}
