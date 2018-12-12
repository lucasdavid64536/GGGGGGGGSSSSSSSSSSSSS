let Discord = require('discord.js');

exports.run = async (client, message, args1) => { 
	
let memberToFind = message.mentions.members.first();
  if (!memberToFind) {
    return message.channel.send('**You Must Mention A User First To Use This Command** ***Expample :*** ``.slap @User``');
  }
 var replys = [
	 "https://media.giphy.com/media/Asm8nZCbWC4ptgDbDe/giphy.gif",
	 "https://media.giphy.com/media/SHhUwqxvWRgg6TL2yu/giphy.gif",
	 
	 ];
	let gif = (replys[Math.floor(Math.random() * replys.length)])
          var embed = new Discord.RichEmbed()
	  .setColor("RANDOM")
	  .setImage(gif)
	  .setTitle(`***slaps ${message.mentions.members.first()}***`)
	  .setFooter("RIP")

}

module.exports.help = {
	name: "slap",
	alias: "s"
}
