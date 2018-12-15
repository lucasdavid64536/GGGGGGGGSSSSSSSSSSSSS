let Discord = require('discord.js');

exports.run = async (client, message, args1) => { 
	
let memberToFind = message.mentions.members.first();
  if (!memberToFind) {
    return message.channel.send('**You Must Mention A User First To Use This Command** ***Expample :*** ``.slap @User``');
  }

          var embed = new Discord.RichEmbed()
	  .setColor("RANDOM")
	  .setTitle(`${message.member.displayName} Slapps  ${message.mentions.members.first().displayName}`)
	  
    message.channel.send(embed)
}

module.exports.help = {
	name: "slap",
	alias: "s"
}
