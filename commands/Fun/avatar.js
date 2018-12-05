let Discord = require('discord.js');

exports.run = (client, message) => {
	
  let user = message.mentions.users.first() || message.author;

  var embed = new Discord.RichEmbed()
  .setAuthor(`${user.username}`)
  .setImage(user.displayAvatarURL)
  .setColor('RANDOM')
  .setFooter("Get Mojang & Spotify Premium Accounts ! With only 4 Euro Just Visit https://selly.gg/@BanGamer And Buy 2 Mojang Premium Accounts With Only 4 Euro ! not 42$ Only 4 Euro!")
  message.react('ðŸ‘')

  message.channel.send(embed)
	
}
module.exports.help = {
	name: "avatar",
	alias: "AVATAR"
}
