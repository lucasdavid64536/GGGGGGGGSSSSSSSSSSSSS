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
  let modlog = guild.channels.find('name', 'mod-log', 'log');//mod-log channel name. change for you
  if (!modlog) return message.reply('`mod-log` Kanalını Bulamıyorum.');//don't find mod-log channel.
  if (!user) return message.reply('**Banı Kaldırılacak Kişinin** **__ID__** **Numarasını Yazmalısın.**').catch(console.error);
  message.guild.unban(user);
  if (reason.length < 1) return message.reply('**Ban Kaldırma Sebebini Belirtmedin!**');//don't forget unban reason

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField('Eylem:', 'Ban kaldırma')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

module.exports.help = {
	name: "unban",
	alias: "un",		
}
