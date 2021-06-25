const Discord = require('discord.js');
const client = new Discord.Client();
const mongoose = require("mongoose");
const translate = require('google-translate-api');
require('dotenv').config();
const fs = require('fs');

client.command = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

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
            msg.author.send("Do u need help or just wanna talk? (y -> yes or n -> no)");
            x++;
        }
        const collector = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', msg => {
            if (msg.content === "y") {
                msg.channel.send("You can trust me, just let it all out and tell me how you are.");
            } else if (msg.content === "n") {
                msg.channel.send("Ok.. see you next time :)");
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

client.login(process.env.DISCORD_TOKEN);
