let Discord = require('discord.js');

exports.run = (client, message) => {
	
  var member = message.mentions.members.first();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('**You Cant Use This Command Because You Dont Have Permissions To Ban Members !**')
  member.ban();
  message.reply('**This Member Got Banned By You For Breaking Rules... He Is gone ....** ``RIP``')
  message.react('ðŸ‘Œ');
	
}
module.exports.help = {
	name: "ban",
	alias: [
	"BAN",
	"banhammer",
	"getGhost"
	]
}
