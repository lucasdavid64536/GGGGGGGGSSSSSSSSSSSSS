const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.reply('Total Members')
message.channel.send("**Total Members In This Server Are : **", message.guild.memberCount);

}

module.exports.help = {
  name: "members"
}
