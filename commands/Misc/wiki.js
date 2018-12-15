let Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {




    let google = args.slice(1).join('+');
    let link = `https://www.google.com/search?q=` + google;
	message.channel.send(link);
}
    
module.exports.help = {
	name: "google"
}
