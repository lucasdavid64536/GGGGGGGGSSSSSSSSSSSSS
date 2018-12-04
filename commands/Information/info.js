let Discord = require('discord.js');

exports.run = (client, message) => {
let cmd = message.content.split(' ').slice(1, 2).join(' ');
	
	
  let memberToFind = message.mentions.members.first();

  if (!memberToFind) {
    return message.channel.send('**You Must Mention A User First To Use This Command** ***Expample :*** ``whois @User``');
  }

  var embed = new Discord.RichEmbed()
  .setAuthor(memberToFind.user.tag, memberToFind.user.avatarURL)
  .setImage(memberToFind.AvatarURL)
  .addField("Member ID:", memberToFind.id, true)
  .addField("Status", memberToFind.statue, true)
  .addField('Account Created', memberToFind.user.createdAt, true)
  .addField('Joined This Server', message.guild.members.get(memberToFind.id).joinedAt, true)
  .addField("Roles", memberToFind.roles, true)
  .setColor('RANDOM')
  message.channel.send(embed);
  message.react("✅");
}	
if(cmd === 'sv'){
let embed = new Discord.RichEmbed()
  .setColor("0x#F605DA")
  .setTitle('**Server Info**')
  .addField("Id", message.guild.id)
  .addField("Owner", message.guild.owner)
  .addField("Owner Id", message.guild.ownerID)
  .addField("Roles", message.guild.roles.size)
  .addField("Total Members", message.guild.memberCount)
  .addField("Region", message.guild.region)
.setThumbnail(message.guild.iconURL)
message.channel.send(embed)
message.react('ðŸ‘');
	
}
if(cmd === 'server'){
let embed = new Discord.RichEmbed()
  .setColor("0x#F605DA")
  .setTitle('**Server Info**')
  .addField("Id", message.guild.id)
  .addField("Owner", message.guild.owner)
  .addField("Owner Id", message.guild.ownerID)
  .addField("Roles", message.guild.roles.size)
  .addField("Total Members", message.guild.memberCount)
  .addField("Region", message.guild.region)
.setThumbnail(message.guild.iconURL)
message.channel.send(embed)
message.react('ðŸ‘');
	
}

module.exports.help = {
	name: "whois",
	alias: "i"
}
