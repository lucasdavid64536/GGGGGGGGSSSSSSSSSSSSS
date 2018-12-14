const Discord = require('discord.js');
const prefix = "."
exports.run = async (client, message, level) => {
    if (!message.content.startsWith(prefix)) return;

    message.reply(`***Is Cooking ${message.author} .*** :smiley:`).then(async msg => {
	    setTimeout(() => {
            msg.edit('***Is Cooking ${message.author} ..*** :smiley:');
        }, 500);
	    setTimeout(() => {
            msg.edit('***Is Cooking ${message.author} ...*** :smiley:');
        }, 500);
	    setTimeout(() => {
            msg.edit('***Is Cooking ${message.author} ....*** :smiley:');
        }, 500);
	    setTimeout(() => {
            msg.edit('***Is Cooking ${message.author} .....*** :smiley:');
        }, 500);
	    setTimeout(() => {
            msg.edit(`:shallow_pan_of_food: ***... ?*** :frowning: :droplet:`);
        }, 4000);
    });
};
	
  message.delete();
	
}
module.exports.help = {
	name: "cook",
	alias: "c",
  }
