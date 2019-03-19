const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("552124874655793172")
setInterval(function() {
channel.send(` تعال بشبعك حب بشبعك دلال تعال يبن حلال`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
