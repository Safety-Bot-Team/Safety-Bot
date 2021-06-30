const profileModel = require('../../Models/profileSchema');

module.exports = async(client, discord, member) => {
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        contact: "",
        country: "Null",
        strike: 0,
        textforu: "Null",
    });
    profile.save();
}