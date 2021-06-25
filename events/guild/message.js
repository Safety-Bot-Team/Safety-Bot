require('dotenv').config();
const { profile } = require('console');
const fs = require('fs');
const dmsafer = require('../../commands/dmsafer');
const { createIndexes } = require('../../Models/profileSchema');
const profileModel = require('../../Models/profileSchema');
module.exports = async (Discord, client, message) =>{
    const prefix = process.env.PREFIX;
    if(message.author.bot) return;
    let profileData;
    try{
        profileData = await profileModel.findOne({ userID: message.author.id});
        if(!profileData){
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                contact: "",
                country: "Null",
                strike: 0,
            });
        }
    }catch(err){
        console.log(err)
    }
    var p = 0;
    if ((/kill myself/gm).test(message.content)) {
        message.author.send('No! suicide is not a solution to this problem, there are many people in the world who feel useless and do not find meaning in life but suicide is never a solution to this problem.... Have you ever tried to express yourself to a person? If you dont dare to confide in a person you know, you can try this website, they help anonymously and quickly in many countries... I love you <3 :) \nWebsite: https://findahelpline.com/i/iasp'); 
        p++;
        await message.channel.messages.fetch({ limit: 1}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
        message.reply("please check your direct messages")
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        },
        {
            $inc: {
                strike: p,
            }
        });  
    }
     if ((/killing myself/gm).test(message.content)) {
        message.author.send('No! suicide is not a solution to this problem, there are many people in the world who feel useless and do not find meaning in life but suicide is never a solution to this problem.... Have you ever tried to express yourself to a person? If you dont dare to confide in a person you know, you can try this website, they help anonymously and quickly in many countries... I love you <3 :) \nWebsite: https://findahelpline.com/i/iasp');
        p++;
        await message.channel.messages.fetch({ limit: 1}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
        message.reply("please check your direct messages")
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        },
        {
            $inc: {
                strike:  p,
            }
        });
    }
    if ((/dont support me/gm).test(message.content)) {
        message.author.send('There are many people who cant put themselves in your shoes, they dont know how you feel inside or cant interpret it correctly. If you need professional and anonymous help, you can always go to the website and get some. \nWebsite: https://findahelpline.com/i/iasp');
        p++;
        await message.channel.messages.fetch({ limit: 1}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
        message.reply("please check your direct messages")
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        },
        {
            $inc: {
                strike:  p,
            }
        });
    }
    if ((/don´t support me/gm).test(message.content)) {
        message.author.send('There are many people who cant put themselves in your shoes, they dont know how you feel inside or cant interpret it correctly. If you need professional and anonymous help, you can always go to the website and get some. \nWebsite: https://findahelpline.com/i/iasp');
        p++;
        await message.channel.messages.fetch({ limit: 1}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
        message.reply("please check your direct messages")
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        },
        {
            $inc: {
                strike:  p,
            }
        });
    }
    if ((/do not support me/gm).test(message.content)) {
        message.author.send('There are many people who cant put themselves in your shoes, they dont know how you feel inside or cant interpret it correctly. If you need professional and anonymous help, you can always go to the website and get some. \nWebsite: https://findahelpline.com/i/iasp');
        p++;
        await message.channel.messages.fetch({ limit: 1}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
        message.reply("please check your direct messages")
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        },
        {
            $inc: {
                strike:  p,
            }
        });
    }
    if ((/I cant live any/gm).test(message.content)) {
        message.author.send('No! suicide is not a solution to this problem, there are many people in the world who feel useless and do not find meaning in life but suicide is never a solution to this problem.... Have you ever tried to express yourself to a person? If you dont dare to confide in a person you know, you can try this website, they help anonymously and quickly in many countries... I love you <3 :)  \nWebsite: https://findahelpline.com/i/iasp');
        p++;
        await message.channel.messages.fetch({ limit: 1}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
        message.reply("please check your direct messages")
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        },
        {
            $inc: {
                strike:  p,
            }
        });
    }
    if ((/I can´t live any/gm).test(message.content)) {
        message.author.send('No! suicide is not a solution to this problem, there are many people in the world who feel useless and do not find meaning in life but suicide is never a solution to this problem.... Have you ever tried to express yourself to a person? If you dont dare to confide in a person you know, you can try this website, they help anonymously and quickly in many countries... I love you <3 :)  \nWebsite: https://findahelpline.com/i/iasp');
        p++;
        await message.channel.messages.fetch({ limit: 1}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
        message.reply("please check your direct messages")
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        },
        {
            $inc: {
                strike:  p,
            }
        });
    }
    if ((/I can not live any/gm).test(message.content)) {
        message.author.send('No! suicide is not a solution to this problem, there are many people in the world who feel useless and do not find meaning in life but suicide is never a solution to this problem.... Have you ever tried to express yourself to a person? If you dont dare to confide in a person you know, you can try this website, they help anonymously and quickly in many countries... I love you <3 :)  \nWebsite: https://findahelpline.com/i/iasp');
        p++;
        await message.channel.messages.fetch({ limit: 1}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
        message.reply("please check your direct messages")
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        },
        {
            $inc: {
                strike:  p,
            }
        });
    } 
    if ((/hurt myself/gm).test(message.content)) {
        message.author.send('No! Hurting yourself is not a solution to this problem, there are many people in the world who feel useless and do not find meaning in life but hurting yourself is never a solution to this problem.... Have you ever tried to express yourself to a person? If you dont dare to confide in a person you know, you can try this website, they help anonymously and quickly in many countries... I love you <3 :)  \nWebsite: https://findahelpline.com/i/iasp');
        p++;
        await message.channel.messages.fetch({ limit: 1}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
        message.reply("please check your direct messages")
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        },
        {
            $inc: {
                strike:  p,
            }
        });
        if ((/cant any longer/gm).test(message.content)) {
            message.author.send('No! Hurting yourself is not a solution to this problem, there are many people in the world who feel useless and do not find meaning in life but hurting yourself is never a solution to this problem.... Have you ever tried to express yourself to a person? If you dont dare to confide in a person you know, you can try this website, they help anonymously and quickly in many countries... I love you <3 :)  \nWebsite: https://findahelpline.com/i/iasp');
            p++;
            await message.channel.messages.fetch({ limit: 1}).then(messages =>{
                message.channel.bulkDelete(messages)
            });
            message.reply("please check your direct messages")
            const response = await profileModel.findOneAndUpdate({
                userID: message.author.id,
            },
            {
                $inc: {
                    strike:  p,
                }
            });
        }
            if ((/cant any more/gm).test(message.content)) {
                message.author.send('No! Hurting yourself is not a solution to this problem, there are many people in the world who feel useless and do not find meaning in life but hurting yourself is never a solution to this problem.... Have you ever tried to express yourself to a person? If you dont dare to confide in a person you know, you can try this website, they help anonymously and quickly in many countries... I love you <3 :)  \nWebsite: https://findahelpline.com/i/iasp');
                p++;
                await message.channel.messages.fetch({ limit: 1}).then(messages =>{
                    message.channel.bulkDelete(messages)
                });
                message.reply("please check your direct messages")
                const response = await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                },
                {
                    $inc: {
                        strike:  p,
                    }
                });  
            }
    }
    if(profileData.strike >= 3){
        client.users.fetch(profileData.contact).then(dm => {
            dm.send(`Your contact person has mentioned too many suicidal terms, we assume he is not doing so well at the moment. please take care of him and show him the value of his life.... We thank you for being there for him while the bot tries to convince him not to leave. But please remember it is only a messenger with limited answers and a small level of understanding which makes it difficult to respond personally to the person.`)
        })
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        },
        {
            $inc: {
                strike:  -2,
            }
        });  
    }
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    
    const agrs = message.content.slice(prefix.length).split(/ +/);
    const cmd = agrs.shift().toLowerCase(); 

    const command = client.command.get(cmd) || client.command.find(a => a.aliases && a.aliases.includes(cmd));

    try{
        command.execute(client, message, agrs, cmd , Discord, profileData);
    }catch(err){
        message.reply("There was an error executing this command")
    }
}