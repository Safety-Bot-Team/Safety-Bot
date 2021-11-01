const { get } = require("mongoose");
const profileModel = require('../Models/profileSchema')
module.exports = {
    name: 'lang',
    description: "check",
    aliases: ["lang", "language", "land"],
    async execute(client, message, cmd, args, Discord, profileData){ 
        message.react('🇪🇸').then(() => message.react('🇺🇸')).then(() => message.react('🇬🇧')).then(() => message.react('🇩🇪')).then(() => message.react('🇵🇹'));
        let targetlang= "Null"
        const filter = async (reaction, user) => {
            return ['🇪🇸', '🇺🇸','🇬🇧','🇩🇪','🇵🇹'].includes(reaction.emoji.name) && user.id === message.author.id; 
        };

        message.awaitReactions(filter, { max: 1,})
            .then(async collected => {
                const reaction = collected.first();

                if (reaction.emoji.name === '🇪🇸') {
                    message.reply('su país ha sido puesto en español ');
                    try{
                        targetlang = 'esp';
                    }catch (err) {
                        console.log(err);
                    } 
                } else if (reaction.emoji.name === '🇵🇹') {
                    message.reply('o seu país foi agora fixado em Portugal ');
                    try{
                        targetlang = 'prt';
                    }catch (err) {
                        console.log(err);
                    }
                } else if (reaction.emoji.name === '🇩🇪') {
                    message.reply('Dein land wurde auf Deutschland gestellt');
                    try{
                        targetlang = 'de';
                    }catch (err) {
                        console.log(err);
                    }
                } else if (reaction.emoji.name === '🇬🇧') {
                    message.reply('Your country was set to England ');
                    try{
                        targetlang = 'gb';
                    }catch (err) {
                        console.log(err);
                    } 
                } else if (reaction.emoji.name === '🇺🇸') {
                    message.reply('Your country was set on America '); 
                    try{
                        targetlang = 'us';
                    }catch (err) {
                        console.log(err);
                    }  
                }
                const response = await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                },
                {
                    $set: {
                        country:  targetlang,
                    }
                });
            })
     }
}