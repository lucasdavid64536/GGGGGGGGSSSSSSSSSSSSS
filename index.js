Discord = require("discord.js");
const client = new Discord.Client();
require('./util/cmdloader.js')(client);//requires the command loader
let prefix = process.env.token;
let token = ".";

client.on('ready', () => {
        client.user.setActivity(`on ${client.guilds.size} servers with ${client.users.size} members`, { type: "PLAYING" });
        setTimeout(game2, 30000)
    });
    
    function game1() {
        client.user.setActivity(`on ${client.guilds.array().length} servers with ${client.users.size} members`, { type: "PLAYING" });
        setTimeout(game2, 30000)
    }
    
    function game2() {
        client.user.setActivity(`my prefix is .`, { type: "PLAYING" });
        setTimeout(game3, 30000)
    }
    
    function game3() {
       client.user.setActivity(`with ${client.commands.size} commands`, { type: "PLAYING" });
        setTimeout(game1, 30000);//these times are in ms, so 30,000 = 30 seconds
    }
console.log("Im READY ")
});
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
});
client.login(process.env.token);
