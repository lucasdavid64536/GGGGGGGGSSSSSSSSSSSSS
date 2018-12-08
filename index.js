Discord = require("discord.js");
const client = new Discord.Client();
require('./util/cmdloader.js')(client);//requires the command loader
const fs = require("fs");
let token = process.env.token;
let prefix = ".";


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

client.on('ready', () => {
        client.user.setActivity(`on ${client.guilds.size} servers with ${client.users.size} members`, { type: "PLAYING" });
        setTimeout(game2, 30000)
    });
    
    function game1() {
        client.user.setActivity(`${client.guilds.array().length} Servers || With ${client.users.size} Members`, { type: "Watching" });
        setTimeout(game2, 30000)
    }
    
    function game2() {
        client.user.setActivity(`Type .help || Get Full List Of My Commands`, { type: "PLAYING" });
        setTimeout(game3, 30000)
    }
    
    function game3() {
       client.user.setActivity(`With ${client.commands.size} Commands`, { type: "PLAYING" });
        setTimeout(game1, 30000);//these times are in ms, so 30,000 = 30 seconds
    }   
client.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = ".";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);
  
//end of handler
});
     
  client.login(process.env.token);
