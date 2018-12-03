Discord = require("discord.js");
const client = new Discord.Client();
require('./util/cmdloader.js')(client);//requires the command loader
let token = process.env.token;
let prefix = ".";

client.on('ready', () => {
client.user.setActivity(`Watching ${client.guilds.size} Servers With ${client.users.size} Members`, { type: "PLAYING" });
        setTimeout(game2, 10000)
    });
    
    function game1() {
        client.user.setActivity(`Type .Help And See Full List Of My Commands`, { type: "PLAYING" });
        setTimeout(game2, 10000)
    }
    
    function game2() {
        client.user.setActivity(`Playing With Other Bots`, { type: "PLAYING" });
        setTimeout(game3, 10000)
    }
console.log('IM READY !')
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
client.on('message', msg => {
  const swearWords = ["WTF", "bitch","fuck","FUCK","wtf","Fuck","fUck","fUCk","wtf","w t f","wt f","motherfucker","MOTHERFUCKERS","MOTHERFUCKER","MOTHERfUCKER","mOTHERfucker"];
  if( swearWords.some(word => msg.content.includes(word)) ) {
      msg.delete();
      msg.author.send('``Anti Bad Wors Blocked`` 🍂 **Stop what you are Posting this Action might have been Logged. Stop Saying Bad Words !**');
    }

 
});
client.login(process.env.token);
