let Discord = require('discord.js');

exports.run = (client, message) => {
	
  message.delete();
  message.reply(`*** Heating ${message.author}...*** :hotsprings: :hotsprings:`).then(m => m.edit(`Now ${message.author} Is Hot :hotsprings: `) );
}
message.channel.send(`*** Heating ${message.author}...*** :hotsprings: :hotsprings:`).then(m => m.edit(`Now ${message.author} Is Hot :hotsprings: `) );
            setTimeout(function() {
                //code
            }, 10000);
        });

module.exports.help = {
	name: "heat",
	alias: "HEAT",
  }
