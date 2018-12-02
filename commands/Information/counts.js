const Discord = require("discord.js");

exports.run = (client, message) => {

message.reply("Total Members In This Server Are", message.guild.memberCount);

}

module.exports.help = {
  name: "members"
}
