let Discord = require('discord.js');
exports.run = (client, message) => {
let cmd = message.content.split(' ').slice(1,2).join(' ');	


if(!cmd||cmd==='sv'){
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
if(cmd === 'cmds'){
  message.reply('')
  var embed = new Discord.RichEmbed()
  .setTitle('**xBot Commands List 3**')
  .addField("**Moderation**","``Moderation : .help ban/help ban \.help kick/help kick === are commands to see how to use Kick/ban commands``")
  .addField('**other Help**','``help ping/.help ping \.help cook/help cook \.help heat/help heat \.help slap/help slap \.help clap/help clap``')
  .setColor("RANDOM")
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/38C2CDU")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === ('ban'||'BAN')){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Ban Command**")
  .setDescription("**Hi You Need Help With Ban Command ?**")
  .addField("***BAN***","**Help With Ban Command : ban + @user** ``OR`` **b + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Get Mojang & Spotify Premium Accounts ! With only 4 Euro Just Visit https://selly.gg/@BanGamer And Buy 2 Mojang Premium Accounts With Only 4 Euro ! not 42$ Only 4 Euro!")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'kick'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Kick Command**")
  .setDescription("``Hi You Need Help With Kick Command ?``")
  .addField("**kick**","**Help With Kick Command : kick + @user*** ``OR`` **k + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/38C2CDU")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'slap'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Slap Command**")
  .setDescription("``Hi You Need Help With Kick Command ?``")
  .addField("**Slap**","**Help With Slap Command : Slap + @user*** ``OR`` **s + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/38C2CDU")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'clap'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Clap Command**")
  .setDescription("``Hi You Need Help With clap Command ?``")
  .addField("**clap**","**Help With clap Command : clap + @user*** ``OR`` **c + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/38C2CDU")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'heat'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With heat Command**")
  .setDescription("``Hi You Need Help With heat Command ?``")
  .addField("**heat**","**Help With Heat Command : heat + @user*** ``OR`` **h + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/38C2CDU")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'cook'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With cook Command**")
  .setDescription("``Hi You Need Help With cook Command ?``")
  .addField("**cook**","**Help With cook Command : cook + @user*** ``OR`` **C + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/38C2CDU")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'ping'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With ping Command**")
  .setDescription("``Hi You Need Help With ping Command ?``")
  .addField("**ping**","**Help With ping Command : ping*** ``OR`` **p** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/38C2CDU")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'addrole'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With addrole Command**")
  .setDescription("``Hi You Need Help With addrole Command ?``")
  .addField("**ping**","**Help With addrole Command : .addrole @user Administrator** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/38C2CDU")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'removerole'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With RemoveRole Command**")
  .setDescription("``Hi You Need Help With RemoveRole Command ?``")
  .addField("**ping**","**Help With removeRole Command : .removerole @user Administrator** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/38C2CDU")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
}
module.exports.help = {
	name: "i",
	alias: "I",		
}
