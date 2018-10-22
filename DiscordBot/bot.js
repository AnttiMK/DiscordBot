const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("pong!");
    } else

        if (message.content.startsWith(prefix + "foo")) {
            message.channel.send("bar!");
        }
});


client.login("Mzc5MDM3OTk5OTU1OTY4MDI5.Dq_Hlg.n4AW-F5JzOO5Kx9DgqZnA-su0ss");

