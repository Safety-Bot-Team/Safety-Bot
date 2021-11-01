const Discord = require('discord.js');
const client = new Discord.Client();
const mongoose = require("mongoose");
const translate = require('google-translate-api');
require('dotenv').config();
const fs = require('fs');
var p = 0;

module.exports = async (Discord, client, message) =>{
    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id});
        if(!profileData){
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                warn: 0,
            });
        }
    }catch(err){
        console.log(err)
    }
}

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

client.command = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})
client.login(process.env.DISCORD_TOKEN);
