let Discord = require('discord.js');

exports.run = (client, msg) => {
let id = msg.content.split(' ').slice(1,2).join(' ');
  let dUser = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.get(id);
  if (!dUser) return msg.channel.send("**I Can't Find This User ! You Must Mention Him OR This User Isn't In This Server**")
  if(!msg.member.permissions.has('ADMINISTRATOR')) return message.reply("**you cant Use This Command Because You Dont Have One From Those Roles Administrator**``/``**Owner**``/``**Moderator OR You Are Missing Administrator Permission**");
  let dMsg = msg.content.split(' ').slice(2).join(' ');
  if(dMsg.length < 1) return msg.reply('You must supply a message!')
  
  dUser.send(`${dUser} **This Is Moderator\Administrator\Owner**_${msg.author}_**Sent You A Dm From Thier Server  Read It Carefully : ** >> ${dMsg}`)
  
  msg.author.send(`${msg.author} You Have Sent This Message <<${dMsg}>> To ${dUser}`)
  msg.react('ðŸ‘Œ');

}
module.exports.help = {
	name: "dm",
	alias: "DM"
}
