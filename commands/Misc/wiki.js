let Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {




    let google = args.slice(1).join('+');
    let link = `https://www.youtube.com/results?search_query=` + google;
	message.channel.send(link);
}
    
module.exports.help = {
	name: "google"
}
