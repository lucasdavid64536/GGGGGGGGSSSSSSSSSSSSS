let Discord = require('discord.js');

exports.run = (client, message) => {
	
  let embed = new Discord.RichEmbed()
  .setColor("0x#F605DA")
  .setTitle('**Server Info**')
  .addField("**Id**", message.guild.id)
  .addField(":prince: **Owner**:prince: ", message.guild.owner)
  .addField(":prince: **Owner Id**:prince: ", message.guild.ownerID)
  .addField(":robot: **Bot Count:**:robot: " + `${bots}`)
  .addField(":man_in_tuxedo: **Human Count:**:man_in_tuxedo: " + `${humans}`)
  .addField(":scroll:**Roles**:scroll:", message.guild.roles.size)
  .addField(":busts_in_silhouette: **Total Members**:busts_in_silhouette: ", message.guild.memberCount)
  .addField(":checkered_flag: **Region**:checkered_flag: ", message.guild.region)
.setThumbnail(message.guild.iconURL)
message.channel.send(embed)
	
}
module.exports.help = {
	name: "serverinfo",
	alias: "i sv"
}
