module.exports = {
    name: 'information',
    aliases: ["info", "selfcare"],
    description: "Also wirklich?",
    async execute(client, message, args){
        const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
        const typeinfo = args[0]; 
        if(isNaN(typeinfo))return message.reply("To get information about mental health, put the following numbers after it: \n1 = Mental Health Defined\n2 = Mental Health Spectrum\n3 = Understanding the Mental Health Spectrum\n4 = Mental Illness Spectrum\n5 = Dual Spectrum of Mental Health\n6 = Identifying a Struggle")
        if(typeinfo == 1){
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#00ffeb')
                .setTitle('Information')
                .setURL('https://findahelpline.com/i/iasp')
                .setAuthor('Safety-Bot', 'https://cdn.discordapp.com/attachments/856253281801994271/858023194204307536/1_KYdE5HFhK1zwX0oaZ9EP5w.png', 'https://findahelpline.com/i/iasp')
                .setDescription('Some informations for you :)')
                .setThumbnail('https://cdn.discordapp.com/attachments/856253281801994271/857712965554143272/IASP_Logo_Linear.png')
                .addFields(
                    { name: 'Mental Health Defined', value: 'Mental health, like physical health, is a key component of what makes us well. We can think of mental health like we think of physical health, but where physical health refers to our bodies, mental health refers to our thoughts, feelings, and behaviours.Mental health is often thought of as only being applicable to the 1 in 5 people who experience mental illness, but that is not the case. The reality is that 5 in 5 people have mental health, and everyone needs to be a part of the conversation. We ALL have mental health. Whether you are part of the 1 in 5 or not, you need to be a part of this conversation.\n\n' },
                )
                // .addField('In these strange and stressful times, you’re not alone.', 'Helplines, also known as hotlines, exist to provide a confidential, non-judgemental space – for free.\n\nThey are staffed by supportive people, who provide immediate support, counselling and information.', false)
                // .setImage('https://cdn.discordapp.com/attachments/856253281801994271/857712338307645440/IASP_Logo_Linear.png')
                .setTimestamp()
                .setFooter('The offered one who is there for you', 'https://cdn.discordapp.com/attachments/856253281801994271/858024585419948102/1_KYdE5HFhK1zwX0dsfoaZ9EP5w.png');
                message.channel.send(exampleEmbed);
        }
        if(typeinfo==2){
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#00ffeb')
                .setTitle('Information')
                .setURL('https://findahelpline.com/i/iasp')
                .setAuthor('Safety-Bot', 'https://cdn.discordapp.com/attachments/856253281801994271/858023194204307536/1_KYdE5HFhK1zwX0oaZ9EP5w.png', 'https://findahelpline.com/i/iasp')
                .setDescription('Some informations for you :)')
                .setThumbnail('https://cdn.discordapp.com/attachments/856253281801994271/857712965554143272/IASP_Logo_Linear.png')
                .addFields(
                    { name: 'Mental Health Defined', value: 'Many people tend to perceive our mental health as something that is black or white; as though we’re either totally healthy or completely unwell at all times. This is not the case! Our mental health lies on a spectrum and how we’re feeling can fluctuate up and down as we live our lives.' },
                )
                .setImage('https://cdn.discordapp.com/attachments/856253281801994271/858265906756583424/1-300px.png')
                // .addField('In these strange and stressful times, you’re not alone.', 'Helplines, also known as hotlines, exist to provide a confidential, non-judgemental space – for free.\n\nThey are staffed by supportive people, who provide immediate support, counselling and information.', false)
                // .setImage('https://cdn.discordapp.com/attachments/856253281801994271/857712338307645440/IASP_Logo_Linear.png')
                .setTimestamp()
                .setFooter('The offered one who is there for you', 'https://cdn.discordapp.com/attachments/856253281801994271/858024585419948102/1_KYdE5HFhK1zwX0dsfoaZ9EP5w.png');
                message.channel.send(exampleEmbed);
            }
        if(typeinfo==3){
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#00ffeb')
                .setTitle('Information')
                .setURL('https://findahelpline.com/i/iasp')
                .setAuthor('Safety-Bot', 'https://cdn.discordapp.com/attachments/856253281801994271/858023194204307536/1_KYdE5HFhK1zwX0oaZ9EP5w.png', 'https://findahelpline.com/i/iasp')
                .setDescription('Some informations for you :)')
                .setThumbnail('https://cdn.discordapp.com/attachments/856253281801994271/857712965554143272/IASP_Logo_Linear.png')
                .addFields(
                    { name: 'Understanding the Mental Health Spectrum', value: 'Both our physical and mental health vary along a spectrum. We’re just more used to talking about our physical health this way. For example, with our physical health there are times when issues may be less critical and you would treat any ailments yourself (e.g. if you had a headache). But there are also more dire times when you need to seek help (e.g. if you had a severe migraine for days on end). \n\n' },
                )
                // .addField('In these strange and stressful times, you’re not alone.', 'Helplines, also known as hotlines, exist to provide a confidential, non-judgemental space – for free.\n\nThey are staffed by supportive people, who provide immediate support, counselling and information.', false)
                // .setImage('https://cdn.discordapp.com/attachments/856253281801994271/857712338307645440/IASP_Logo_Linear.png')
                .setTimestamp()
                .setFooter('The offered one who is there for you', 'https://cdn.discordapp.com/attachments/856253281801994271/858024585419948102/1_KYdE5HFhK1zwX0dsfoaZ9EP5w.png');
                message.channel.send(exampleEmbed);

        }
        if(typeinfo==4){
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#00ffeb')
                .setTitle('Information')
                .setURL('https://findahelpline.com/i/iasp')
                .setAuthor('Safety-Bot', 'https://cdn.discordapp.com/attachments/856253281801994271/858023194204307536/1_KYdE5HFhK1zwX0oaZ9EP5w.png', 'https://findahelpline.com/i/iasp')
                .setDescription('Some informations for you :)')
                .setThumbnail('https://cdn.discordapp.com/attachments/856253281801994271/857712965554143272/IASP_Logo_Linear.png')
                .addFields(
                    { name: 'Mental Illness Spectrum', value: 'As discussed previously, mental illness is not synonymous with mental health and is a separate part of this discussion. Mental illnesses are also not a black and white conversation and can be experienced in varying levels of severity or not at all. This is demonstrated by the spectrum below.\n A person with a more severe mental illness may experience significantly more disruptive symptoms than another person who may experience minimal symptoms.\n\n' },
                )
                // .addField('In these strange and stressful times, you’re not alone.', 'Helplines, also known as hotlines, exist to provide a confidential, non-judgemental space – for free.\n\nThey are staffed by supportive people, who provide immediate support, counselling and information.', false)
                .setImage('https://jack.org/getattachment/Resources-1/Learn/Mental-Health-101/2-4.jpg')
                .setTimestamp()
                .setFooter('The offered one who is there for you', 'https://cdn.discordapp.com/attachments/856253281801994271/858024585419948102/1_KYdE5HFhK1zwX0dsfoaZ9EP5w.png');
                message.channel.send(exampleEmbed);

        }
        if(typeinfo==5){
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#00ffeb')
                .setTitle('Information')
                .setURL('https://findahelpline.com/i/iasp')
                .setAuthor('Safety-Bot', 'https://cdn.discordapp.com/attachments/856253281801994271/858023194204307536/1_KYdE5HFhK1zwX0oaZ9EP5w.png', 'https://findahelpline.com/i/iasp')
                .setDescription('Some informations for you :)')
                .setThumbnail('https://cdn.discordapp.com/attachments/856253281801994271/857712965554143272/IASP_Logo_Linear.png')
                .addFields(
                    { name: 'Dual Spectrum of Mental Health', value: 'When we bring these two spectrums together - to create a “dual spectrum” - we get a full representation of how we can understand fluctuations in someone’s mental state. Regardless of having a mental illness, anyone can experience struggle and anyone can experience optimal health. \n\n' },
                )
                // .addField('In these strange and stressful times, you’re not alone.', 'Helplines, also known as hotlines, exist to provide a confidential, non-judgemental space – for free.\n\nThey are staffed by supportive people, who provide immediate support, counselling and information.', false)
                .setImage('https://jack.org/getattachment/Resources-1/Learn/Mental-Health-101/3-4.jpg')
                .setTimestamp()
                .setFooter('The offered one who is there for you', 'https://cdn.discordapp.com/attachments/856253281801994271/858024585419948102/1_KYdE5HFhK1zwX0dsfoaZ9EP5w.png');
                message.channel.send(exampleEmbed);

        } 
        if(typeinfo==6){
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#00ffeb')
                .setTitle('Information')
                .setURL('https://findahelpline.com/i/iasp')
                .setAuthor('Safety-Bot', 'https://cdn.discordapp.com/attachments/856253281801994271/858023194204307536/1_KYdE5HFhK1zwX0oaZ9EP5w.png', 'https://findahelpline.com/i/iasp')
                .setDescription('Some informations for you :)')
                .setThumbnail('https://cdn.discordapp.com/attachments/856253281801994271/857712965554143272/IASP_Logo_Linear.png')
                .addFields(
                    { name: 'Identifying a Struggle', value: 'With or without a mental illness, it can be quite difficult to recognize when mental distress has become too severe for us to look after on our own. Mental distress can be recognized as a “struggle” whenever we or someone we know experiences negative thoughts, feelings, and behaviours that have become intense, long-lasting, and are beginning to have a big impact on our lives. This framework is a helpful tool to use when we’re trying to assess the severity of the thoughts, feelings, and behaviours we might be experiencing:\n\n' },
                    { name: 'Are they intense?', value: 'These aren’t mild, everyday fluctuations. They’re stronger and more persistent thoughts, feelings, and behaviours than the usual ups and downs of life.'},
                    { name: 'Are they long-lasting?', value: 'They’re having a consistent or lingering presence over weeks, months, or longer. Many professionals suggest that anything that’s lasted two weeks or longer can be cause for concern.'},
                    { name: 'Are they having a big impact?', value: 'They’re beginning to have negative consequences in one’s life, possibly interfering with someone’s ability to function and/or meet their everyday goals.'}
                    )
                .addField('In these strange and stressful times, you’re not alone.', 'Helplines, also known as hotlines, exist to provide a confidential, non-judgemental space – for free.\n\nThey are staffed by supportive people, who provide immediate support, counselling and information.', false)
                .setImage('https://cdn.discordapp.com/attachments/856253281801994271/857712338307645440/IASP_Logo_Linear.png')
                .setTimestamp()
                .setFooter('The offered one who is there for you', 'https://cdn.discordapp.com/attachments/856253281801994271/858024585419948102/1_KYdE5HFhK1zwX0dsfoaZ9EP5w.png');
                message.channel.send(exampleEmbed);

        }
        else{

        }
    }
}