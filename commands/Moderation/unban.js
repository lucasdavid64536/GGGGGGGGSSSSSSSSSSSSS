const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyarı** :warning:', '`unban` **Adlı Komutu Özel Mesajlarda Kullanamazsın.** ')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find('name', 'log', 'log');//mod-log channel name. change for you
  if (!modlog) return message.reply('**I Cant Find Log Channel Please Create A Channel With** ``log`` **Name To Be Able To Use This Command**');//don't find mod-log channel.
  if (!user) return message.reply('**I Cant Find User ! Please Type Hes** ``__ID__`` **And This Command Will Work**').catch(console.error);
  message.guild.unban(user);
  if (reason.length < 1) return message.reply('**You Did Not Specify The Reason For The Unban **');//don't forget unban reason
	
var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField('Action:', 'Unban')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Authorized:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["u"],
  permLevel: 2
};

module.exports.help = {
	name: "unban",
	alias: "un",		
}
