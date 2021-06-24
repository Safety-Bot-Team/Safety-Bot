const { get } = require("mongoose");
const profileModel = require('../Models/profileSchema')
module.exports = {
    name: 'hugu',
    description: "check",
    aliases: ["givehug", "hughim"],
    async execute(client, message, cmd, args, Discord, profileData){  
        const memberTarget = message.guild.members.cache.get(profileData.contact);
        message.author.send(`you hugged ${memberTarget}`)
        client.users.fetch(profileData.contact).then(dm => {
            dm.send(`${message.author.username} hugged you.`)
        })
        await message.channel.messages.fetch({ limit: 1}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
    }
}