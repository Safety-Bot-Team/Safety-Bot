const { get } = require("mongoose");
const profileModel = require('../Models/profileSchema')
module.exports = {
    name: 'kill',
    description: "check",
    aliases: ["anymore", "helppls"],
    async execute(client, message, cmd, args, Discord, profileData){  
        const memberTarget = message.guild.members.cache.get(profileData.contact);
        message.author.send("dont we need u... i love you <3... and a lot of persons as well... I am hear for u feel free to tell me everthing")
        client.users.fetch(profileData.contact).then(dm => {
            dm.send(`Your contact ${message.author.username} has just written the last step he wants to take... please take care of him IMMEDIATELY!!!!`)
        })
        await message.channel.messages.fetch({ limit: 1}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
    }
}