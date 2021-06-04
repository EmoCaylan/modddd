const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const moment = require('moment')
const jdb = new db.table("cezalar");
const kdb = new db.table("kullanici");


exports.run = async (client, message, args) => {
    let raviwen = message.member
	
    let embed = new MessageEmbed().setAuthor(raviwen.user.tag, raviwen.user.displayAvatarURL({dynamic: true})).setColor("RED").setTimestamp();
    let cezaID = Number (args[0]);
    if (!cezaID) return message.channel.send(embed.setDescription("Geçerli bir ceza numarası belirtmelisin.")).then(x => x.delete({timeout: 5000}))
    let ravi = db.fetch(`cezainfo.${cezaID}.${message.guild.id}`)
    if (!ravi) return message.channel.send(embed.setDescription(`Belirtilen ID ile bir ceza bulamadım \`!#${cezaID}\``)).then(x => x.delete({timeout: 10000}));
    let uye = client.users.fetch(ravi.kisi) || ravi.kisi;
    let mod = client.users.fetch(ravi.mod) || ravi.mod;


    message.channel.send(embed.setDescription(`Ceza ID: \`#${cezaID}\`  \n\n\`•\` Ceza Bilgisi: ${ravi.komut} \n\`•\` Ceza Alan Üye: ${message.guild.members.cache.get(ravi.kisi) || ravi.kisi} (\`${uye.id || ravi.kisi}\`) \n\`•\` Yetkili: ${message.guild.members.cache.get(ravi.mod) || ravi.mod} (\`${mod.id || ravi.mod}\`) \n\`•\` Sebep: ${ravi.sebep} \n\`•\` Tarih: ${ravi.zaman}`));

};

exports.conf = {enabled: true, guildOnly: true, aliases: ["ceza-bilgi","ceza-info"]};
exports.help = {name: 'cezainfo'};