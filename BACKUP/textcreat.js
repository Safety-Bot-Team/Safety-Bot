const { get } = require("mongoose");
const profileModel = require('../Models/profileSchema')
module.exports = {
    name: 'textcreat',
    description: "text",
    aliases: ["tcreat", "textc"],
    async execute(client, message, cmd, args, Discord, profileData){
        const typeinfo = message.content;
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        },
        {
            $set: {
                textforu: typeinfo,
            }
        });
        message.reply("saved")
    }
}