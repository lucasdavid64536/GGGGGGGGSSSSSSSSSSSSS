let Discord = require('discord.js');

exports.run = (client, message) => {
message.delete();
message.channel.send(`*** Heating ${message.author}...*** :hotsprings: :hotsprings:`)
            setTimeout(function() {
                //code
            }, 10000);.	then(m => m.edit(`Now ${message.author} Is Hot :hotsprings: `) );
   }

module.exports.help = {
	name: "heat",
	alias: "HEAT",
  }
