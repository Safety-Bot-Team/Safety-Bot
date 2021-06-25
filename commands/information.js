module.exports = {
    name: 'information',
    aliases: ["info", "selfcare"],
    description: "Also wirklich?",
    async execute(client, message, args){
        const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
        if(isNaN(args[0]))return message.reply("To get information about mental health, put the following numbers after it: \n1 = Mental Health Defined\n2 = Mental Health Spectrum\n3 = Understanding the Mental Health Spectrum\n4 = Mental Illness Spectrum\n5 = Dual Spectrum of Mental Health\n6 = Identifying a Struggle")
        if ((/1/gm).test(message.content)) {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#00ffeb')
                .setTitle('Information')
                .setURL('https://findahelpline.com/i/iasp')
                .setAuthor('Safety-Bot', 'https://cdn.discordapp.com/attachments/856253281801994271/858023194204307536/1_KYdE5HFhK1zwX0oaZ9EP5w.png', 'https://findahelpline.com/i/iasp')
                .setDescription('Some informations for you :)')
                .setThumbnail('https://cdn.discordapp.com/attachments/856253281801994271/857712965554143272/IASP_Logo_Linear.png')
                .addFields(
                    { name: 'Mental Health Defined', value: 'Mental health, like physical health, is a key component of what makes us well. We can think of mental health like we think of physical health, but where physical health refers to our bodies, mental health refers to our thoughts, feelings, and behaviours.Mental health is often thought of as only being applicable to the 1 in 5 people who experience mental illness, but that is not the case. The reality is that 5 in 5 people have mental health, and everyone needs to be a part of the conversation. We ALL have mental health. Whether you are part of the 1 in 5 or not, you need to be a part of this conversation.' },
                )
                .addField('In these strange and stressful times, you’re not alone.', 'Helplines, also known as hotlines, exist to provide a confidential, non-judgemental space – for free.\n\nThey are staffed by supportive people, who provide immediate support, counselling and information.', false)
                .setImage('https://cdn.discordapp.com/attachments/856253281801994271/857712338307645440/IASP_Logo_Linear.png')
                .setTimestamp()
                .setFooter('The offered one who is there for you', 'https://cdn.discordapp.com/attachments/856253281801994271/858024585419948102/1_KYdE5HFhK1zwX0dsfoaZ9EP5w.png');
        }
        if(args[0]===2){
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#00ffeb')
                .setTitle('Information')
                .setURL('https://findahelpline.com/i/iasp')
                .setAuthor('Safety-Bot', 'https://cdn.discordapp.com/attachments/856253281801994271/858023194204307536/1_KYdE5HFhK1zwX0oaZ9EP5w.png', 'https://findahelpline.com/i/iasp')
                .setDescription('Some informations for you :)')
                .setThumbnail('https://cdn.discordapp.com/attachments/856253281801994271/857712965554143272/IASP_Logo_Linear.png')
                .addFields(
                    { name: 'Mental Health Defined', value: 'Many people tend to perceive our mental health as something that is black or white; as though we’re either totally healthy or completely unwell at all times. This is not the case! Our mental health lies on a spectrum and how we’re feeling can fluctuate up and down as we live our lives.\nhttps://jack.org/getattachment/Resources-1/Learn/Mental-Health-101/1-300px.jpg' },
                )
                .addField('In these strange and stressful times, you’re not alone.', 'Helplines, also known as hotlines, exist to provide a confidential, non-judgemental space – for free.\n\nThey are staffed by supportive people, who provide immediate support, counselling and information.', false)
                .setImage('https://cdn.discordapp.com/attachments/856253281801994271/857712338307645440/IASP_Logo_Linear.png')
                .setTimestamp()
                .setFooter('The offered one who is there for you', 'https://cdn.discordapp.com/attachments/856253281801994271/858024585419948102/1_KYdE5HFhK1zwX0dsfoaZ9EP5w.png');
                message.channel.send(exampleEmbed);
            }
        if(args[0]===3){

        }
        if(args[0]===4){

        }
        if(args[0]===5){

        } 
        if(args[0]===6){

        }
        else{

        }
    }
}