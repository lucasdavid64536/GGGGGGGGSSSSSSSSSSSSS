let Discord = require('discord.js');

exports.run = (client, message) => {

message.reply(`***Is Cooking ${message.author}*** :smiley:`).then(m => m.edit(' :shallow_pan_of_food: .. ? :frowning: :droplet:');

}

module.exports.help = {
	name: "cook",
	alias: "c"
}
