let Discord = require('discord.js');

exports.run = (client, message) => {
	
  var embed = new Discord.RichEmbed()
  .setTitle("**Our Community Games & Events**")
  .setDescription("**Hey Hello ! Welcome Our Community Our Games Are http://starve.io/ - https://www.scrible.com/ - https://www.lordz.io/ - https://moomoo.io/ - there more games ask Ban about them (The Leader and The Owner Of me)**")
  .setColor("0x#F8FC05")
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/38C2CDU ")
  message.channel.sendEmbed(embed);
  message.react('ðŸ‘');
	
}
module.exports.help = {
	name: "game"
}
