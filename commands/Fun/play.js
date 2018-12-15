
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.voiceChannel) return message.channel.send(':no_entry_sign: Please join a voice channel.');
    if (message.guild.me.voiceChannel) return message.channel.send(':no_entry_sign: Error, the bot is already connected to another music channel or a song is playing.');
    if (!args[0]) return message.channel.send(':no_entry_sign: Error, please enter a **URL** following the command.');

    let validate = await ytdl.validateURL(args[0]);
   
    if (!validate) return message.channel.send(':no_entry_sign: Error, please input a __valid__ url following the command.');

    let info = await ytdl.getInfo(args[0]);
   
    let connection = await message.member.voiceChannel.join();
    let dispatcher = await connection.playStream(ytdl(args[0], {
        filter: 'audioonly'
    }));

    let playembed = new Discord.RichEmbed()
    .setTitle("Now playing")
    .setDescription(`${info.title}`)
    
    message.channel.send(playembed);
}

module.exports.help = {
	name: "test",
}
