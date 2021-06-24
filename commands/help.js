module.exports = {
    name: 'help',
    description: "help",
    execute(client, message, args){
        const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#00ffeb')
            .setTitle('Help page')
            .setURL('https://findahelpline.com/i/iasp')
            .setAuthor('Safety-Bot', 'https://cdn.discordapp.com/attachments/819260613414748160/856255404229394432/mcashe-mcashe-luciayme.png', 'https://cdn.discordapp.com/attachments/819260613414748160/856803693222428702/AAUvwngSrZ_JhobKuYEdcA0F4hyl9jxJm42KJvei3PYxMws88-c-k-c0x00ffffff-no-rj.png')
            .setDescription('if you need help, just click on the word "help page" and you will be helped. otherwise, you will find some numbers and more information about the bot below.')
            .setThumbnail('https://www.iasp-pain.org/files/PageLayoutImages/IASP%20Logo%20270X98_1504021088752_1.png')
            .addFields(
                { name: 'Numbers that can help: ', value: 'Here are a few numbers and pages that might help' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Germany/Deutschland', value: 'Nummer: 0800 1110111 \nWebsite: https://www.telefonseelsorge.de/', inline: true },
                { name: 'America/Canada', value: 'Nummer: 1-800-273-8255\n Website: https://suicidepreventionlifeline.org/ \n\n\n', inline: true },
                { name: 'General Suicide Prevention Help', value: 'Website: https://findahelpline.com/i/iasp', inline: false },
                { name: '\u200B', value: '\u200B' },
            )
            .addFields(
                { name: 'Bot command that might also help you ', value: 'This bot has a few useful functions that might help you \n\n' },   
                { name: '-ctadd', value: 'Add a contact who will be notified when you need help ', inline: true },
                { name: '-ct', value: 'shows you your current contact ', inline: true },
                { name: '-pls', value: 'Ask the bot for help, it will keep everything to itself and inform the contact person if necessary. ', inline: true },
            )
            .addFields(
                { name: 'Bot command that might also help you ', value: 'This bot has a few useful functions that might help you \n\n' },   
                { name: '-lang', value: 'this command tells the bot which country you are from to offer you better help  ', inline: true },
                { name: '-helpl', value: 'this command shows you the helpline for your country (you have to use -lang first)', inline: true },
                { name: '-hug / -givehug', value: 'ask or give your contact person for a hug', inline: true },
            )
            .addField('In these strange and stressful times, you’re not alone.', 'Helplines, also known as hotlines, exist to provide a confidential, non-judgemental space – for free.\n\nThey are staffed by supportive people, who provide immediate support, counselling and information.', false)
            .setImage('https://cdn.discordapp.com/attachments/819260613414748160/856803739368554516/international-association-of-science-parks-and-areas-of-innovation-iasp-vector-logo.png')
            .setTimestamp()
            .setFooter('The offered one who is there for you', 'https://cdn.discordapp.com/attachments/819260613414748160/856255404229394432/mcashe-mcashe-luciayme.png');

            message.channel.send(exampleEmbed);
           

        const betahelp = new Discord.MessageEmbed()
            .setColor('#00ffeb')
            .setTitle('Information')
            .setURL('https://findahelpline.com/i/iasp')
            .setAuthor('Safety-Bot', 'https://cdn.discordapp.com/attachments/819260613414748160/856255404229394432/mcashe-mcashe-luciayme.png', 'https://cdn.discordapp.com/attachments/819260613414748160/856803693222428702/AAUvwngSrZ_JhobKuYEdcA0F4hyl9jxJm42KJvei3PYxMws88-c-k-c0x00ffffff-no-rj.png')
            .setDescription('this bot is still in beta and there can often be bugs or commands not working, so please let me know (Discord:Unterwegs#6666)')
            .setThumbnail('https://www.iasp-pain.org/files/PageLayoutImages/IASP%20Logo%20270X98_1504021088752_1.png')
            .addFields(
                { name: 'This bot is programmed by ', value: 'Unterwegs#6666\n' },   
                { name: 'And special thanks to :', value: 'LeonieSizzels#2009',}, 
            )
            .addField('In these strange and stressful times, you’re not alone.', 'Helplines, also known as hotlines, exist to provide a confidential, non-judgemental space – for free.\n\nThey are staffed by supportive people, who provide immediate support, counselling and information.', false)
            .setImage('https://cdn.discordapp.com/attachments/819260613414748160/856803739368554516/international-association-of-science-parks-and-areas-of-innovation-iasp-vector-logo.png')
            .setTimestamp()
            .setFooter('The offered one who is there for you', 'https://cdn.discordapp.com/attachments/819260613414748160/856255404229394432/mcashe-mcashe-luciayme.png');
            
            message.channel.send(betahelp);
                
            
    }
}