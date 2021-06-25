const Discord = require('discord.js');
const client = new Discord.Client();
const mongoose = require("mongoose");
const translate = require('google-translate-api');
require('dotenv').config();
const fs = require('fs');
var p = 0;

module.exports = async (Discord, client, message) =>{
    let profileData;
    try {
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
}

mongoose
.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log("Connected to DB!");
})
.catch((err) => {
    console.log(err);
})

var x = 0;
client.on('message', msg => {
    
    if (msg.channel.type == "dm") {
        if(x != 1){
            msg.author.send("Hello, how are you? (pls a short answer in this section like: not so good or good)");
            x++;
        }
        const collector = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', msg => {
            if (msg.content === /not/gm) {
                msg.channel.send("What is wrong u wanna talk about it?");
            } else if(msg.content === /good/gm){
                msg.channel.send("that's nice to hear");
            }
        })
      return;
    }
});
client.on('message', msg => {
    if (msg.channel.type == "dm") {
        translate(msg, {to: 'en'}).then(msg => {
            console.log(msg.text);
            
            console.log(msg.from.language.iso);
            
        }).catch(err => {
            console.error(err);
        });
        if ((/kill myself/gm).test(msg.content)) {
            msg.reply('No! suicide is not a solution to this problem, there are many people in the world who feel useless and do not find meaning in life but suicide is never a solution to this problem.... Have you ever tried to express yourself to a person? If you dont dare to confide in a person you know, you can try this website, they help anonymously and quickly in many countries... I love you <3 :) \nWebsite: https://findahelpline.com/i/iasp'); 
         }
         if ((/killing myself/gm).test(msg.content)) {
            msg.reply('No! suicide is not a solution to this problem, there are many people in the world who feel useless and do not find meaning in life but suicide is never a solution to this problem.... Have you ever tried to express yourself to a person? If you dont dare to confide in a person you know, you can try this website, they help anonymously and quickly in many countries... I love you <3 :) \nWebsite: https://findahelpline.com/i/iasp');
        }
        if ((/dont support me/gm).test(msg.content)) {
            msg.reply('There are many people who cant put themselves in your shoes, they dont know how you feel inside or cant interpret it correctly. If you need professional and anonymous help, you can always go to the website and get some. \nWebsite: https://findahelpline.com/i/iasp');
        }
        if ((/don´t support me/gm).test(msg.content)) {
            msg.reply('There are many people who cant put themselves in your shoes, they dont know how you feel inside or cant interpret it correctly. If you need professional and anonymous help, you can always go to the website and get some. \nWebsite: https://findahelpline.com/i/iasp');
        }
        if ((/do not support me/gm).test(msg.content)) {
            msg.reply('There are many people who cant put themselves in your shoes, they dont know how you feel inside or cant interpret it correctly. If you need professional and anonymous help, you can always go to the website and get some. \nWebsite: https://findahelpline.com/i/iasp');
        }
        if ((/I cant live any/gm).test(msg.content)) {
            msg.reply('No! suicide is not a solution to this problem, there are many people in the world who feel useless and do not find meaning in life but suicide is never a solution to this problem.... Have you ever tried to express yourself to a person? If you dont dare to confide in a person you know, you can try this website, they help anonymously and quickly in many countries... I love you <3 :)  \nWebsite: https://findahelpline.com/i/iasp');
        }
        if ((/I can´t live any/gm).test(msg.content)) {
            msg.reply('No! suicide is not a solution to this problem, there are many people in the world who feel useless and do not find meaning in life but suicide is never a solution to this problem.... Have you ever tried to express yourself to a person? If you dont dare to confide in a person you know, you can try this website, they help anonymously and quickly in many countries... I love you <3 :)  \nWebsite: https://findahelpline.com/i/iasp');
        }
        if ((/I can not live any/gm).test(msg.content)) {
            msg.reply('No! suicide is not a solution to this problem, there are many people in the world who feel useless and do not find meaning in life but suicide is never a solution to this problem.... Have you ever tried to express yourself to a person? If you dont dare to confide in a person you know, you can try this website, they help anonymously and quickly in many countries... I love you <3 :)  \nWebsite: https://findahelpline.com/i/iasp');
        } 
        if ((/hurt myself/gm).test(msg.content)) {
            msg.reply('No! Hurting yourself is not a solution to this problem, there are many people in the world who feel useless and do not find meaning in life but hurting yourself is never a solution to this problem.... Have you ever tried to express yourself to a person? If you dont dare to confide in a person you know, you can try this website, they help anonymously and quickly in many countries... I love you <3 :)  \nWebsite: https://findahelpline.com/i/iasp');
        }
    }
});
client.command = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})
client.login(process.env.DISCORD_TOKEN);
