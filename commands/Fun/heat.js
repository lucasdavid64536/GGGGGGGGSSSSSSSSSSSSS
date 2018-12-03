let Discord = require('discord.js');

exports.run = (client, message) => {
	
  message.delete();
  message.reply(`*** Heating ${message.author}...*** :hotsprings: :hotsprings:`).then(m => m.edit(`Now ${message.author} Is Hot :hotsprings: `) );
  message.react('ðŸ‘');
	
}
module.exports.help = {
	name: "heat",
	alias: "HEAT",
  }
