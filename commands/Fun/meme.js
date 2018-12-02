const Discord = require("discord.js");
const client = new Discord.Client();

  exports.run = (client, message) => {
let nickname = args.join(' ')
  message.guild.members.get('YOUR BOT ID')
  	.setNickname(nickname);
  await message.channel.send({
  	embed: new Discord.RichEmbed()

  		.setTitle(`Changed Server Nickname to ${nickname}`)
  })
  }
  module.exports.help = {
	name: "set server",
}
