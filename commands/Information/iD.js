let Discord = require('discord.js');

exports.run = (client, message) => {
let cmd = message.content.split(' ').slice(1, 2).join(' ');
	
	
  let memberToFind = message.mentions.members.first();

  if (!memberToFind) {
    return message.channel.send('**You Must Mention A User First To Use This Command** ***Expample :*** ``.id @User``');
  }
  
   var embed = new Discord.RichEmbed()
   .setTitle("**Member ID:**")
   .setDescription("**This Member ID Is:**", memberToFind.id, true)
   message.channel.send(embed)
   }
module.exports.help = {
  name:"id"
}

  
