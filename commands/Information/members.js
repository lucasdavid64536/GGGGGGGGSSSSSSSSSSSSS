let Discord = require('discord.js');

exports.run = (client, message) => {
	
  let embed = new Discord.RichEmbed()
  .setColor("0x#F605DA")
  .setTitle('**Total Members**')
  .addField("Total Members", message.guild.memberCount)
message.channel.send(embed)
message.react('ðŸ‘');
	
}
module.exports.help = {
	name: "serverinfo",
	alias: "i sv"
}
