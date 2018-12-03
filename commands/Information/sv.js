if(cmd === ('sv')){
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('**Server Info**')
  .addField("Id", message.guild.id)
  .addField("Owner Name", message.guild.owner)
  .addField("Owner Id", message.guild.ownerID)
  .addField("Roles Count", message.guild.roles.size)
  .addField("Region", message.guild.region)
.setThumbnail(message.guild.iconURL)
message.channel.send(embed)
message.react('✅');
}

module.exports.help = {
	name: "i",
	alias: "I
}
