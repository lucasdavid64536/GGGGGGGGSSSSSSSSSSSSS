exports.run = (bot, message, args) => {
    const reason = args.slice(1).join(' ');
    bot.unbanReason = reason;
    bot.unbanAuth = message.author;
    const user = args[0];
    const modlog = bot.channels.find('name', 'log');
    if (!modlog) return message.reply('**I Cant Find Log Channel Please Create A Channel With** ``log`` **Name To Be Able To Use This Command**');
    if (reason.length < 1) return message.reply('*You Did Not Specify The Reason For The Unban **');
    if (!user) return message.reply('**I Cant Find User ! Please Type Hes** ``__ID__`` **And This Command Will Work**').catch(console.error);
    message.guild.unban(user);
    message.reply(`Successfuly unbanned <@${user}>`)
    var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField('Action:', 'Unban')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Authorized:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
  return guild.channels.get(log.id).sendEmbed(embed);
};

module.exports.help = {
	name: "unban",
	alias: "un"
}
