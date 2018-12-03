let Discord = require('discord.js');

exports.run = (client, message) => {


    var embed = new Discord.RichEmbed()
      // Set the title of the field
      .setTitle('Zapper')
      .setDescription('Chaque jour 10 nouvelles anecdotes à découvrir')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .addField('Vocabulaire', "Nycthémère signifie l'espace de temps d'une durée de 24 heures, alternant nuit jour.", true)
      
    message.channel.send(embed)
    message.react(':yum:')
  
      
      
      
}

module.exports.help = {
	name: "test",
	alias: "TEST"

}
