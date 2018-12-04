const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


client.on("guildCreate", async guild => {
  let guildCreateChannel = client.channels.get("517387859695763467");
  
  let general = guild.channels.find('name', 'general');
  guild.channels.get(general.id).createInvite().then(invite => {
    
    let joinEmbed = new Discord.RichEmbed()
      .setTitle('Guild Joined')
      .setThumbnail(guild.iconURL)
      .setURL(invite.url)
      .setDescription('Join the new Guild')
      .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**`)
      
    guildCreateChannel.send(joinEmbed);
  });
}); 

client.on("guildDelete", async guild => {
  let guildCreateDelete = client.channels.get("<channel id here>");
  
  let leaveEmbed = new Discord.RichEmbed()
    .setTitle('Guild Left')
    .setThumbnail(guild.iconURL)
    .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**`)
  
  guildCreateDelete.send(leaveEmbed);

}
