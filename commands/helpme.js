const { get } = require("mongoose");
const profileModel = require('../Models/profileSchema')
module.exports = {
    name: 'helpme',
    description: "check",
    aliases: ["pls", "cant"],
    async execute(client, message, cmd, args, Discord, profileData){  
        const memberTarget = message.guild.members.cache.get(profileData.contact);
        message.author.send("You asked for help? I'm here for you. Feel free to vent to me.")
        client.guilds.cache.get(profileData.serverID).members.fetch(profileData.contact).then(dm => {
            dm.send(`Your contact person has asked for help!! here is a little tip on how you could approach him: You cannot assess the persons situation from the outside, you have not been trained for this... Thats why we wanted to inform you and since ${message.author.username} is still in contact with you, you should listen to him and give him the feeling of being loved and not just being some person who is a burden to others.`)
        })
        await message.channel.messages.fetch({ limit: 1}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
    }
}