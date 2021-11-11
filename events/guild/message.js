require('dotenv').config();
const { profile } = require('console');
const fs = require('fs');
const { createIndexes } = require('../../Models/profileSchema');
const profileModel = require('../../Models/profileSchema');
const fetch = require("node-fetch").default;
module.exports = async (Discord, client, message) => {
    const prefix = process.env.PREFIX;
    if (message.author.bot) return;
    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id });
        if (!profileData) {
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                strike: 0,
            });
        }
    } catch (err) {
        console.log(err)
    }
    if(message.author.bot) return;
    
    if(message.channel.id === "908430333937066044"){
        fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}`)
        .then(response => response.json())
        .then(data => {
            message.channel.send(data.response)
        })   
    }

    if (!message.content.startsWith(prefix)) return;


    const agrs = message.content.slice(prefix.length).split(/ +/);
    const cmd = agrs.shift().toLowerCase();

    const command = client.command.get(cmd) || client.command.find(a => a.aliases && a.aliases.includes(cmd));

    try {
        command.execute(client, message, agrs, cmd, Discord, profileData);
    } catch (err) {
        message.reply("Der command wurde nicht gefunden! Benutze doch bitte -help um dich mit den befehlen auseinander zus�tzen")
    }
}