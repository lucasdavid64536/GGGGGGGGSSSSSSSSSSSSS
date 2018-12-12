 const Discord = require("discord.js"); // Discord Module Required
 
exports.run = async (client, message, args1) => { 
  var replys = [
    "https://giphy.com/gifs/1fl3uoVMsx9mFkECau",

          ];
          let gif = (replys[Math.floor(Math.random() * replys.length)])
          var embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setImage(gif)
          .setFooter('Trump')

  
  message.channel.send(embed)
  console.log("Trump gif succesfully send")}
  
  module.exports.help = {
	name: "gif",
	alias: "g"
}
