require('dotenv').config();
const { profile } = require('console');
const fs = require('fs');
const { createIndexes } = require('../../Models/profileSchema');
const profileModel = require('../../Models/profileSchema');
module.exports = async (Discord, client, message) => {
    const prefix = process.env.PREFIX;
    if (message.author.bot) return;
    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id });
        if (!profileData) {
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                strike: 0,
            });
        }
    } catch (err) {
        console.log(err)
    }
    if ((/Guten Morgen/gm).test(message.content)) {
        message.reply('Guten Tag mein Lieber ^^');
    }
    if ((/Moin/gm).test(message.content)) {
        message.reply('Guten Tag mein Lieber ^^');
    }
    if ((/Guten Tag/gm).test(message.content)) {
        message.reply('Guten Tag mein Lieber ^^');
    }
    if ((/Guten Abend/gm).test(message.content)) {
        message.reply('Guten Tag mein Lieber ^^');
    }
    if ((/Gute Nacht/gm).test(message.content)) {
        message.reply('Gute Nacht mein/e süße/r ^^');
    }
    if (!message.content.startsWith(prefix) || message.author.bot) return;


    const agrs = message.content.slice(prefix.length).split(/ +/);
    const cmd = agrs.shift().toLowerCase();

    const command = client.command.get(cmd) || client.command.find(a => a.aliases && a.aliases.includes(cmd));

    try {
        command.execute(client, message, agrs, cmd, Discord, profileData);
    } catch (err) {
        message.reply("Der command wurde nicht gefunden! Benutze doch bitte -help um dich mit den befehlen auseinander zusätzen")
    }
}