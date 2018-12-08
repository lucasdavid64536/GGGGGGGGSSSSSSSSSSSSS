let Discord = require('discord.js');

exports.run = (client, message) => {
	
  var embed = new Discord.RichEmbed()
  .setTitle("**Want To Me In Your Server ? Awesome !**")
  .setDescription("**You Can Find Me With This** [Link](https://discordapp.com/oauth2/authorize?client_id=517276995269296129&permissions=8&scope=bot)")
  .setColor("0x#220A29")
   .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/38C2CDU")
  message.channel.sendEmbed(embed);
  message.react('ðŸ‘');
	
}
module.exports.help = {
	name: "invite"
}
