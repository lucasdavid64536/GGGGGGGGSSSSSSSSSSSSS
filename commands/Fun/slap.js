let Discord = require('discord.js');

exports.run = (client, message) => {

message.reply(`***slaps ${message.mentions.members.first()}***`)

}

module.exports.help = {
	name: "slap",
	alias: "s"
}
