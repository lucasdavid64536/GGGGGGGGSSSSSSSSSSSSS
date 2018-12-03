let Discord = require('discord.js');

exports.run = (client, message) => {
	
  message.delete();
  message.reply(`*** Heating ${message.author}...*** :hotsprings: :hotsprings:`)
	setTimeout(heat, 10000)(m => m.edit(`Now ${message.author} Is Hot :hotsprings: `) );
}

module.exports.help = {
	name: "heat",
	alias: "HEAT",
  }
