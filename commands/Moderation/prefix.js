const Discord = require('discord.js');

exports.run = async (client, message, level) => {
	
  var prefix = '.';
let fetched = await db.fetch(`prefix_${message.guild.id}`);
if (fetched === null) prefix = 'your prefix here';
else prefix = fetched;

// code 2 [new command]

if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '357555941215961099') return message.channel.send('Sorry, you don\'t have permission to change server prefix')
	.then(msg => msg.delete({
		timeout: 10000
	}));
if (!args.join(' ')) return message.channel.send('Please provide a prefix to change server prefix')
	.then(msg => msg.delete({
		timeout: 10000
	}));

db.set(`prefix_${message.guild.id}`, args.join(' '))
	.then(i => {
		message.channel.send(`Server Prefix has been changed to ${i}`);
	})
	module.exports.help = {
	name: "prefix"
}
