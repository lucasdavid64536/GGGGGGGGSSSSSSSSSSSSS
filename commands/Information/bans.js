let Discord = require('discord.js');

exports.run = (client, message) => {
	
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle('**Total Bans**')
  .addField("**Total Members Who They Got Bans In This Server Are**", fetchBans())
message.channel.send(embed)
message.react('😂');
	
}
module.exports.help = {
	name: "bans",
  alias: "i bans"
}
	
