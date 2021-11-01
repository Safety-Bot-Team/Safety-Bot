const { get } = require("mongoose");
const profileModel = require('../Models/profileSchema')
module.exports = {
    name: 'textsend',
    description: "text",
    aliases: ["tsend", "texts"],
    async execute(client, message, cmd, args, Discord, profileData){
        if(profileData.textforu === "Null") return message.reply("First you need to add an text use -tcreat [your text here]");
        else{
            client.guilds.cache.get(profileData.serverID).members.fetch(profileData.contact).then(dm => {
                dm.send(`Your contact person has written you a text, he has now told me to send it to you. (At the moment this command is only set up Unterwegs because it is from an older client).`)
                dm.send(`bitte guck nach ob es deiner kontakt Person gut geht normaler weise könnte es sich um einen abschied Brief handeln der nun nur in echt zeit weiter geschickt wird um ihm noch rechtzeitig helfen zu können.`)
                dm.send(`Text:`)
                dm.send(profileData.textforu)
            })
            message.reply("sended")
        }
    }
}