let Discord = require('discord.js');

exports.run = (client, message) => {

message.reply(`***throws ${message.mentions.members.first()}***`)

}

module.exports.help = {
	name: "throw",
	alias: "THROW"
}
