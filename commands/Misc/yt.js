
let Discord = require('discord.js');

exports.run = (client, message) => {



    let youtube = args.slice(1).join('+');
    let link = `https://www.youtube.com/results?search_query=` + youtube;
	message.channel.send(link);
}


module.exports.help = {
	name: "youtube"
}

