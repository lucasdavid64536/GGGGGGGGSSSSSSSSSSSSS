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
  if (cmd === `${prefix}stars` || cmd === `${prefix}stats` || cmd === `${prefix}level`) {
    let mystars = new Discord.RichEmbed()
    .setColor("#4999f0")
    .setTitle(`${message.author.user.username}'s Stats`)
    .addField(`Level`, `{body.level}`)
    .addField(`Name`, `${message.author.user.username}`)
    .addField(`Stars Taken`, `{body.stars}`)
    .addField(`Stars Given`, `{body.level}`)
    message.channel.send(mystars);
  }

module.exports.help = {
	name: "pre",
	alias: "P",
  }
