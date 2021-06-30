const { get } = require("mongoose");
const profileModel = require('../Models/profileSchema')
module.exports = {
    name: 'dmsafe',
    description: "check",
    aliases: ["dm", "safer"],
    async execute(client, message, cmd, args, Discord, profileData){
        message.reply("Ok, look into your dms")
        message.author.send("You asked for help? I'm here for you. Feel free to vent to me.")
    }
}