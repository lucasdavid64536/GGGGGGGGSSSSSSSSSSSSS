let Discord = require('discord.js');

exports.run = (client, message) => {
	
  message.delete();
  message.reply(`***Is Cooking ${message.author}*** :smiley:`).then(m => m.edit(`:shallow_pan_of_food: ***... ?*** :frowning: :droplet:`) );
  message.react('ðŸ‘');
	
}
module.exports.help = {
	name: "cook",
	alias: "c",
  }
