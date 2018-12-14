const Discord = require('discord.js');
const prefix = "."
exports.run = async (client, message, level) => {
  
    if (!message.member.hasPermission("ADMINISTRATOR" || !message.author.id === botconfig.ownerID)) {
      let setprefix_error = new Discord.RichEmbed()
      .setColor("#4999f0")
      .setTitle(`Only users with **Administrator** permissions can use this!`)
      message.channel.send(setprefix_error);
      return;
    };
  }

module.exports.help = {
	name: "pre",
	alias: "P",
  }
