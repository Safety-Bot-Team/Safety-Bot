const profileModel = require('../../Models/profileSchema');

module.exports = async(client, discord, member) => {
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        strike: 0,
    });
    profile.save();
}