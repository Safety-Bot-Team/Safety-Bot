module.exports = {
    name: 'changelog',
    aliases: ["chlog", "log"],
    description: "Also wirklich?",
    execute(client, message, args){
        const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#00ffeb')
            .setTitle('Changelog')
            .setURL('https://findahelpline.com/i/iasp')
            .setAuthor('Safety-Bot', 'https://cdn.discordapp.com/attachments/819260613414748160/856255404229394432/mcashe-mcashe-luciayme.png', 'https://cdn.discordapp.com/attachments/856253281801994271/857712965554143272/IASP_Logo_Linear.png')
            .setDescription('Here are the changes from the bot')
            .setThumbnail('https://cdn.discordapp.com/attachments/856253281801994271/857712965554143272/IASP_Logo_Linear.png')
            .addFields(
                { name: '24.06.2021', value: 'Changes:' },
                { name: '\u200B', value: '\u200B' },
                { name: 'added:', value: '-changelog (shows you the changes )' },
                { name: 'improved:', value: '-help (now shows a few recently added commands and the misleading image has been removed and replaced)\nalso, some performance improvements have been added and redundant code removed, and some data has already been uploaded to the new server --> see coming soon  ' },
                { name: 'coming soon:', value: 'so what is coming soon is the move to a permanent server that is online, the only problem at the moment is the database which can no longer be accessed as it is on a secure server and needs a unique IP address to connect to, as the new server is now restarted every 48 hours and the IP address changes there will be problems. I am working closely with some of the server providers to find a solution as soon as it is ready, the bot will also be online 24/7. I ask for a little patience '},
                { name: '\u200B', value: '\u200B' },
            )
            .addField('In these strange and stressful times, you’re not alone.', 'Helplines, also known as hotlines, exist to provide a confidential, non-judgemental space – for free.\n\nThey are staffed by supportive people, who provide immediate support, counselling and information.', false)
            .setImage('https://cdn.discordapp.com/attachments/856253281801994271/857712338307645440/IASP_Logo_Linear.png')
            .setTimestamp()
            .setFooter('The offered one who is there for you', 'https://cdn.discordapp.com/attachments/819260613414748160/856255404229394432/mcashe-mcashe-luciayme.png');

         message.channel.send(exampleEmbed);
        const change2 = new Discord.MessageEmbed()
            .setColor('#00ffeb')
            .setTitle('Changelog')
            .setURL('https://findahelpline.com/i/iasp')
            .setAuthor('Safety-Bot', 'https://cdn.discordapp.com/attachments/819260613414748160/856255404229394432/mcashe-mcashe-luciayme.png', 'https://cdn.discordapp.com/attachments/856253281801994271/857712965554143272/IASP_Logo_Linear.png')
            .setDescription('Here are the changes from the bot')
            .setThumbnail('https://cdn.discordapp.com/attachments/856253281801994271/857712965554143272/IASP_Logo_Linear.png')
            .addFields(
                { name: '25.06.2021', value: 'Changes:' },
                { name: '\u200B', value: '\u200B' },
                { name: 'added:', value: '-info (does not yet work for all users and is still being extensively tested)\na few new auto filter words have been added and an automatic translator is still being worked on, more on this later perhaps  ' },
                { name: 'improved:', value: 'the database connection from the current server has been significantly accelerated (faster queries for the -pls command etc.)' },
                { name: 'coming soon:', value: 'so what is coming soon is the move to a permanent server that is online, the only problem at the moment is the database which can no longer be accessed as it is on a secure server and needs a unique IP address to connect to, as the new server is now restarted every 48 hours and the IP address changes there will be problems. I am working closely with some of the server providers to find a solution as soon as it is ready, the bot will also be online 24/7. I ask for a little patience '},
                { name: '\u200B', value: '\u200B' },
            )
            .addField('In these strange and stressful times, you’re not alone.', 'Helplines, also known as hotlines, exist to provide a confidential, non-judgemental space – for free.\n\nThey are staffed by supportive people, who provide immediate support, counselling and information.', false)
            .setImage('https://cdn.discordapp.com/attachments/856253281801994271/857712338307645440/IASP_Logo_Linear.png')
            .setTimestamp()
            .setFooter('The offered one who is there for you', 'https://cdn.discordapp.com/attachments/819260613414748160/856255404229394432/mcashe-mcashe-luciayme.png');

            message.channel.send(change2);
    }
}