const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let serverembed = new Discord.RichEmbed()
.setTitle('Total Members')
addField("**Total Members In This Server Are : **", message.guild.memberCount);

message.channel.send(embed);
}

module.exports.help = {
  name: "member count"
}
