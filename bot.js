const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("572834186868555802")
setInterval(function() {
channel.send(`‘Ê »ﬂ «‰  ‘Ê »ﬂ «‰  «‰  „€›· Ì« «ŒÌ`);
}, 30)
})

client.login(process.env.BOT_TOKEN);