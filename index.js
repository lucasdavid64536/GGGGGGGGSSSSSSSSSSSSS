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
	

});

client.login(process.env.token);
