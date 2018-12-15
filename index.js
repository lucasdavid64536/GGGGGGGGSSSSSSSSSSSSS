Discord = require("discord.js");
const client = new Discord.Client();
require('./util/cmdloader.js')(client);//requires the command loader
let token = process.env.token;
let prefix = ".";

client.on('ready', () => {
        client.user.setActivity(`On ${client.guilds.size} Servers With ${client.users.size} Members`, { type: "PLAYING" });
        setTimeout(game2, 20000)
    });
    
    function game1() {
        client.user.setActivity(`${client.guilds.array().length} Servers || With ${client.users.size} Members`, { type: "Watching" });
        setTimeout(game2, 20000)
    }
    
    function game2() {
        client.user.setActivity(`Type .help || Get Full List Of My Commands`, { type: "LISTENING" });
        setTimeout(game3, 20000)
    }
    
    function game3() {
       client.user.setActivity(`To ${client.commands.size} Commands`, { type: "LSTENING" });
        setTimeout(game1, 20000);//these times are in ms, so 30,000 = 30 seconds
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
	
client.on("channelCreate", async channel => {
	var logChannel = channel.guild.channels.find(c => c.name === 'logs');
	if (!logChannel) return console.log("Can't find logs channel.");
	var cembed = new Discord.RichEmbed()
		.setTitle("Channel Created")
		.setColor("RANDOM")
		.setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just created!`)
		.setTimestamp(new Date());
	logChannel.send(cembed)
});

client.on("channelDelete", async channel => {
	var logChannel = channel.guild.channels.find(c => c.name === 'log');
	if (!logChannel) return console.log("Can't find logs channel.");
	var embed = new Discord.RichEmbed()
		.setTitle("Channel Deleted")
		.setColor("RANDOM")
		.setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just deleted!`)
		.setTimestamp(new Date())
	logChannel.send(embed)
});	
client.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "test");
    member.addRole(role).catch(console.error);
}
});

client.login(process.env.token);
