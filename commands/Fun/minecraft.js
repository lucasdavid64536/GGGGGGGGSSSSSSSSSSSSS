const Discord = require("discord.js");

exports.run = (client, message) => {

var list = [
    '',
     'Email : **zyazzie24@gmail.com** PassWord : **thecool5**',
     'Email : **thuan.nguyenguinard@gmail.com** PassWord : **qegjtip0**',
    'Email : **sebastian.onatemena@gmail.com** Password : **0aa92e88**',
    'Email : **martin.edmondson62@googlemail.com** Password : martyfarty60',
    'jdingman0@gmail.com:senate13',
    'marshaallred@hotmail.com:Kaywill1',
    'dupont.pedro@gmail.com:maxwell1986',
    'tonystarkmk47@gmail.com:sdecmts47',
    'timothy.i.mayo@gmail.com:Dontgeton1',
    'birkanyurt97.by@gmail.com:Vertrauen18',
    'thalysisawesome08@gmail.com:Galego21',
    'frozenxspirits@gmail.com:badegg101',
    'chrisho1302@gmail.com:Sandy1302',
    'pnzpirat@gmail.com:pompat2312',
    'audell.ellis@gmail.com:Audell123',
    'alvaro2512@hotmail.es:chamita23',
    'olexandr03503@gmail.com:Perova03503',
    'unai_ianu-@hotmail.com:lamafia7',
    'famey6402@gmail.com:123456789nik',
    'saxey21@hotmail.de:sabaka1818',
    'pakolamontagna@gmail.com:pasquale21',
    'r_uddin@hotmail.co.uk:sandman1',
    'dragonoverride@gmail.com:a12041985',
    'zeni939@hotmail.com:25agosto',
    'belee2468@gmail.com:Rocky0503',
    'baggiomendes@gmail.com:guilherme11',
    'adrian.zimmermann@axa.ch:wadrian1',
    'warfrenzy@aol.com:Applemilk123',
    'd.elton@newman-displays.com:United85',
    'sportsmanjay@gmail.com:Jayden01'
];

var rand = Math.floor(Math.random() * list.length);

//Send's a reply to the user who wrote the message
var embed = new Discord.RichEmbed()
.setTitle('**Fortnite Accounts Generator**')
.addField("**The Account**", list[rand])
.setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/38C2CDU")
.setColor("RANDOM")

message.channel.send(embed)

}
module.exports.help = {
	name: "gen fortnite",
	alias: "gf"
}
