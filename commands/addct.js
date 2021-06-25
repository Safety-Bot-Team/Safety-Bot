const { get } = require("mongoose");
const profileModel = require('../Models/profileSchema')
module.exports = {
    name: 'addct',
    description: "check",
    aliases: ["ctadd", "con"],
    async execute(client, message, cmd, args, Discord, profileData){
        const target = message.mentions.users.first();
        const memberTarget = message.guild.members.cache.get(target.id);
        if(message.author.id === target.id) return message.channel.send("You cant add ur self as an contact");
        else if(target.id === profileData.contact) return message.channel.send("You already have this person as your contact");
        else{
            const response = await profileModel.findOneAndUpdate({
                userID: message.author.id,
            },
            {
                $set: {
                    contact:  memberTarget,
                    serverID: message.guild.id,
                }
            });  
            return message.channel.send(`${message.author.username}, you added ${memberTarget} as ur contact!`) 
        }
         
    }
}