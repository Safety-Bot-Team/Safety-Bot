const { get } = require("mongoose");
const profileModel = require('../Models/profileSchema')
module.exports = {
    name: 'mad',
    description: "check",
    aliases: ["hug", "hugpls"],
    async execute(client, message, cmd, args, Discord, profileData){  
        const memberTarget = message.guild.members.cache.get(profileData.contact);
        message.author.send("You asked for a hug")
        client.users.fetch(profileData.contact).then(dm => {
            dm.send(`${message.author.username} needs a hug from you.`)
        })
        await message.channel.messages.fetch({ limit: 1}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
    }
}