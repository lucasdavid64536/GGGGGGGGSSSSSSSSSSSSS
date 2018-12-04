Discord = require("discord.js");
const client = new Discord.Client();
require('./util/cmdloader.js')(client);//requires the command loader
const fs = require("fs");
bot.commands = new Discord.Collection();
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
if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("You have to wait 5 seconds between commands.")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)


});
  client.login(process.env.token);
