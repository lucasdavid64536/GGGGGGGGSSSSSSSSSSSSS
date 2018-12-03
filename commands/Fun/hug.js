let Discord = require('discord.js');

exports.run = (client, message) => {

message.reply(`***hugs ${message.mentions.members.first()}***`)

}

module.exports.help = {
	name: "hug",
	alias: "HUG"
}
