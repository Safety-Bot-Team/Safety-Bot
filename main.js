const Discord = require('discord.js');
const client = new Discord.Client();
const mongoose = require("mongoose");
require('dotenv').config();
const fs = require('fs');

client.command = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

mongoose
.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log("Connected to DB!");
})
.catch((err) => {
    console.log(err);
})

client.login(process.env.DISCORD_TOKEN);
