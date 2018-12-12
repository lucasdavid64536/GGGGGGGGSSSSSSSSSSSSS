let Discord = require('discord.js');

exports.run = async (client, message, args1) => { 
	
let memberToFind = message.mentions.members.first();
  if (!memberToFind) {
    return message.channel.send('**You Must Mention A User First To Use This Command** ***Expample :*** ``.slap @User``');
  }

          var embed = new Discord.RichEmbed()
	  .setColor("RANDOM")
	  .setTitle("RIP")
	  .setFooter(`***slaps ${message.mentions.members.first()}***`)
	  
    message.channel.send(embed)
}

module.exports.help = {
	name: "slap",
	alias: "s"
}
