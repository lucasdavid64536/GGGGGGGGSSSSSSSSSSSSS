let Discord = require('discord.js');
exports.run = (client, message) => {
let cmd = message.content.split(' ').slice(1,2).join(' ');	


if(!cmd||cmd==='1'){
	var embed = new Discord.RichEmbed()
  .addField("**Greeting**","``Hi and Hello my friend im xBot a funny bot and moderation bot  Here is My commands You Can Also Join The Supoort Server Have A Good Time From xBot`` ", true)
  .setTitle("**Bot Commands**")
  .setDescription("``THOSE ARE MY COMMANDS READ THEM CAREFULLY AND DON'T FORGET MY PREFIX IS o! AND THERE SOME COMMANDS WITHOUT PREFIX LIKE HELP , GN ....`` **You Can Also Get Me By Typing invite** ``OR`` **o!invite**``")
  .addField('**There Are A Report System**', "**With .report @user <reason> usage ! So If You Want It Work You Should Make A Channel Wil reports name To make This Command work---Don't Forget This Advice ! Make A Channel With** ``log`` **Name !**")
  .addField("**Moderation**","**Kick , Ban , Warn , clear , Send , ,up - Uptime Check , Dm , addrole , removerole  Are A Seriously Commands !** **addrole/removerole usage: o!addrole @user Rolename  Remember Don't Mention the role Just Put Hes Name**")
  .addField("``If You Need Help With Any Command Just Type help + the command you want <<Ex : help ban >>``")
  .addField("**Fun Commands**","``avatar , say , botinfo, info , goodnight , goodmorning , slap , clap , cook , heat , meme , ping , 8ball , count  , ``")
  .addField("**help**","``You Can Visit Our Support Community https://discord.gg/UpjCWx9`` ", true)
  .addField("**.help 2**"," **Interesting !?**")
  .setColor("0x#58FAF4")
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/UpjCWx9")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === '2'){
  message.reply('')
  var embed = new Discord.RichEmbed()
  .setTitle('**Bot Commands List 2**')
  .addField("**Moderation**","``Moderation : o!send / o!dm / dm / send === are Commands To Send A Message To The Member You Mentioned To Notify Him For A Dangerous Things Like Hes spam in server etc... [If Ban Got Any Report About A Moderator/owner Of A Server Spamming Hes Members Dms He Will Delete Me From The Current Server So Be Carefull With using This Command ! ]``")
  .addField("**You Can Also Use Some Commands without Typing All of The Command**","``Example>>`` **o!p === ping command \ whois/info/i === To See A The User Info \ count === to see how many servers I'm in them ! \ serverinfo/.i sv === to See The Server Info** ")
  .addField("**.help 3**","**Interesting !?**")
  .setColor("RANDOM")
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/UpjCWx9")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === '3'){
  message.reply('')
  var embed = new Discord.RichEmbed()
  .setTitle('**Bot Commands List 3**')
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
  .setFooter("Get Mojang & Spotify Premium Accounts ! With only 4 Euro Just Visit https://selly.gg/@Shadow And Buy 2 Mojang Premium Accounts With Only 4 Euro ! not 42$ Only 4 Euro!")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'kick'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Kick Command**")
  .setDescription("``Hi You Need Help With Kick Command ?``")
  .addField("**kick**","**Help With Kick Command : kick + @user*** ``OR`` **k + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/UpjCWx9")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'slap'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Slap Command**")
  .setDescription("``Hi You Need Help With Kick Command ?``")
  .addField("**Slap**","**Help With Slap Command : Slap + @user*** ``OR`` **s + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/UpjCWx9")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'clap'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Clap Command**")
  .setDescription("``Hi You Need Help With clap Command ?``")
  .addField("**clap**","**Help With clap Command : clap + @user*** ``OR`` **c + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/UpjCWx9")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'heat'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With heat Command**")
  .setDescription("``Hi You Need Help With heat Command ?``")
  .addField("**heat**","**Help With Heat Command : heat + @user*** ``OR`` **h + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/UpjCWx9")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'cook'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With cook Command**")
  .setDescription("``Hi You Need Help With cook Command ?``")
  .addField("**cook**","**Help With cook Command : cook + @user*** ``OR`` **C + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/UpjCWx9")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'ping'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With ping Command**")
  .setDescription("``Hi You Need Help With ping Command ?``")
  .addField("**ping**","**Help With ping Command : ping*** ``OR`` **p** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/UpjCWx9")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'addrole'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With addrole Command**")
  .setDescription("``Hi You Need Help With addrole Command ?``")
  .addField("**ping**","**Help With addrole Command : o!addrole @user Administrator** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/UpjCWx9")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'removerole'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With RemoveRole Command**")
  .setDescription("``Hi You Need Help With RemoveRole Command ?``")
  .addField("**ping**","**Help With removeRole Command : o!removerole @user Administrator** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/UpjCWx9)
  message.channel.sendEmbed(embed);
  message.react('👍');
}
}
module.exports.help = {
	name: "help",
	aliases: ["h", 
		  "HELP", 
		  "Help"
		 ]		
}
