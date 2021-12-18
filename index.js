const Discord = require("discord.js");

const client = new Discord.Client();

let os = require("os")

client.login(process.env.token);
