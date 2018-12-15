let Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {




    let wiki = args.slice(1).join('+');
    let link = `https://en.wikipedia.org/wiki/` + wiki;
	message.channel.send(link);
}
    
module.exports.help = {
	name: "wiki"
}
