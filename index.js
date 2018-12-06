Discord = require("discord.js");
const client = new Discord.Client();
require('./util/cmdloader.js')(client);//requires the command loader
let token = process.env.token;
let prefix = ".";

client.on('ready', () => {
console.log('IM READY !');
client.user.setActivity(`${client.guilds.size} Servers With ${client.users.size} Members`, { type: "Watching" });
        setTimeout(game2, 20000)
    });
    
    function game1() {
        client.user.setActivity(`Type .Help And See Full List Of My Commands`, { type: "Watching" });
        setTimeout(game2, 20000)
    }
    
    function game2() {
        client.user.setActivity(`Other Bots`, { type: "Watching" });
        setTimeout(game3, 20000)
    }
    
    function game3() {
       client.user.setActivity(`Responding For ${client.commands.size} commands`, { type: "Watching" });
        setTimeout(game1, 20000);//these times are in ms, so 30,000 = 30 seconds
    }      //seconds/1000 = ms
     function game4() {
       client.user.setActivity(`Buying Mojang Premium Accounts From https://selly.gg/@BanGamer For Only 4€ Do Like Me! `, { type: "Impressed" });
        setTimeout(game4, 30000);//these times are in ms, so 30,000 = 30 seconds
    } 
client.on('message', message => {
 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  cmd = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);

  
//command handler
let commandfile = client.commands.get(cmd);
  let alias = client.aliases.get(cmd);

  if(commandfile){
      commandfile.run(client,message,args);
  }
  if(alias){
      alias.run(client,message,args);
  }
//end of handler
});
module.exports = (client, guild) => {
    let guildCreateJoin = client.channels.get('517388949048655892');
    let joinEmbed = new Discord.RichEmbed()
    .setTitle("Bot Joined server!")
    .setThumbnail(guild.iconURL)
    .addField(`Server Name:`, `${guild.name}`)
    .addField(`Server ID:`, `${guild.id}`)
    .addField(`Server Owner:`, `${guild.owner}`)
    .setColor("#4286f4")
    .setFooter(`${client.config.botname}`)
    .setTimestamp();
    guildCreateJoin.send(joinEmbed);
}
module.exports = (client, guild) => {
    let guildCreateDelete = client.channels.get('517388949048655892');
    let leaveEmbed = new Discord.RichEmbed()
    .setTitle("Bot left server!")
    .setThumbnail(guild.iconURL)
    .addField(`Server Name:`, `${guild.name}`)
    .addField(`Server ID:`, `${guild.id}`)
    .addField(`Server Owner:`, `${guild.owner}`)
    .setColor("#4286f4")
    .setFooter(`${client.config.botname}`)
    .setTimestamp();
    guildCreateDelete.send(leaveEmbed);
}
}      
});
  client.login(process.env.token);
