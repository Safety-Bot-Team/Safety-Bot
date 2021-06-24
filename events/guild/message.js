require('dotenv').config();
const fs = require('fs');
const dmsafer = require('../../commands/dmsafer');
const profileModel = require('../../Models/profileSchema');
module.exports = async (Discord, client, message) =>{
    const prefix = process.env.PREFIX;
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let profileData;
    try{
        profileData = await profileModel.findOne({ userID: message.author.id});
        if(!profileData){
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                contact: "",
                country: "Null",
            });
        }
    }catch(err){
        console.log(err)
    }
    
    const agrs = message.content.slice(prefix.length).split(/ +/);
    const cmd = agrs.shift().toLowerCase(); 

    const command = client.command.get(cmd) || client.command.find(a => a.aliases && a.aliases.includes(cmd));

    try{
        command.execute(client, message, agrs, cmd , Discord, profileData);
    }catch(err){
        message.reply("There was an error executing this command")
    }
}