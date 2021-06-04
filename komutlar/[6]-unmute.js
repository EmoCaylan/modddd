
const { MessageEmbed } = require("discord.js");
const data = require("quick.db");
const inventory = require('../inventory/ServerConfig.json')
const jdb = new data.table("cezalar");
const kdb = new data.table("kullanici");
const ms = require('ms');
const moment = require('moment');
module.exports.run = async (client, message, args) => {
if(![inventory.ServerAuthorizedPerms.AbilityID, inventory.ServerAuthorizedPerms.MuteSpearID].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setDescription(`${message.author} bu komutu kullanabilmek için <@&${inventory.ServerAuthorizedPerms.MuteSpearID}> rolüne ihtiyacın var. ${inventory.Emoji.False}`).setAuthor(message.author.tag, message.author.avatarURL({dynamic:true})).setColor(inventory.Colors.NoEmbed)).then(x => x.delete({timeout: 6500}));
let MuteLog = inventory.Channels.MuteLogChannelID

let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if (!member) return message.channel.send(new MessageEmbed().setColor(inventory.Colors.NoEmbed).setDescription(`${message.author}, lütfen bir kullanıcı etiketle !`)).then(x => x.delete({timeout: 6500}));
  
let mute = message.mentions.members.first() || message.guild.members.cache.find(r => r.id === args[0]);
if (!mute) { new MessageEmbed().setColor(inventory.Colors.NoEmbed).setDescription(`${message.author}, lütfen mute atmam gereken kullanıcı belirt !`).then(x => x.delete({timeout: 6500}));
} else {
if (mute.roles.highest.position >= message.member.roles.highest.position) 
{
        return message.channel.send(new MessageEmbed().setColor(inventory.Colors.NoEmbed).setDescription(`Bu Kullanıcı Senden Üst/Aynı Pozisyonda.`)).then(x => x.delete({timeout: 6500}));
} else {
        let sebep = args.splice(1).join(" ")
        if(!sebep) return message.channel.send(new MessageEmbed().setColor(inventory.Colors.NoEmbed).setDescription(`Lütfen Bir sebep belirtiniz.`)).then(x => x.delete({timeout: 6500})); 
  

let kaldırmaay = moment(Date.now()).format("MM")
let kaldırmagün = moment(Date.now()).format("DD")
let kaldırmasaat = moment(Date.now()).format("HH:mm:ss")
let mutekaldırma = `\`${kaldırmagün} ${kaldırmaay.replace(/01/, 'Ocak').replace(/02/, 'Şubat').replace(/03/, 'Mart').replace(/04/, 'Nisan').replace(/05/, 'Mayıs').replace(/06/, 'Haziran').replace(/07/, 'Temmuz').replace(/08/, 'Ağustos').replace(/09/, 'Eylül').replace(/10/, 'Ekim').replace(/11/, 'Kasım').replace(/12/, 'Aralık')} ${kaldırmasaat}\``
moment.locale("tr")


let zaman1 = args[1]
.replace("sn", "s")
.replace("dk", "m")
.replace("sa", "h")
.replace("gün", "d");
//
var vakit = zaman1
.replace("m", " dakika")
.replace("s", " saniye")
.replace("h", " saat")
.replace("d", " d");  
  
let tumaylar = {
"01": "Ocak",  
"02": "Şubat", 
"03": "Mart",  
"04": "Nisan",  
"05": "Mayıs", 
"06": "Haziran", 
"07": "Temmuz",
"08": "Ağustos", 
"09": "Eylül", 
"10": "Ekim", 
"11": "Kasım", 
"12": "Aralık", 
}
let aylar = tumaylar; 
       {
const doru = client.emojis.cache.get(inventory.Emoji.TrueID) 
message.react(doru)
client.channels.cache.get(MuteLog).send(new MessageEmbed().setTitle(`Bir Üye Metin Kanallarından Susturulması Kalktı.`).setColor(inventory.Colors.Yesil).setFooter(message.author.tag, message.author.avatarURL({dynamic:true})).setTimestamp().setDescription(`Bir üyenin cezası sonlandı, **${kullanici.user.tag}** metin kanallardan yasağı kaldırıldı. ${inventory.Emoji.True} \n\n Yetkili: ${message.author} (\`${message.author.id}\`) \n Kullanıcı: ${kullanici.user} (\`${kullanici.user.id}\`)\nTarih: ${mutekaldırma}`));
mute.roles.remove(inventory.Penalties.MuteRole)
}}}}

exports.conf = {enabled: true, guildOnly: true, aliases: ["unmute"], permLevel: 0}

exports.help = {name: "unmute"};

