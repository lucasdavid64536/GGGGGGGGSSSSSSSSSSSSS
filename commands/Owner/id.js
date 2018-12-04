let Discord = require('discord.js');

exports.run = (client, message) => {
	
  message.channel.send(`${message.guild.id}`)
  
}

module.exports.help = {
	name: "sid",
	alias: "SID"
}
