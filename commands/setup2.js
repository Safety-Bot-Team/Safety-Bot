module.exports = {
    name: 'setup2',
    description: "setup2",
    async execute(client, message, args){
        const Discord = require('discord.js');
        if(message.member.permissions.has("MANAGE_CHANNELS")){
            // Create a new channel with permission overwrites
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#00ffeb')
            .setTitle('How to use')
            .setURL('https://findahelpline.com/i/iasp')
            .setAuthor('Safety-Bot', 'https://cdn.discordapp.com/attachments/856253281801994271/858024585419948102/1_KYdE5HFhK1zwX0dsfoaZ9EP5w.png', 'https://findahelpline.com/i/iasp')
            .setDescription('Thank you for inviting the Safety Bot to your server and bringing us one step closer to our goal of helping as many people as possible. \nIn the following, you will find step-by-step instructions on how to set up the Safety Bot for the first time. \n\n')
            .setThumbnail('https://cdn.discordapp.com/attachments/856253281801994271/857712965554143272/IASP_Logo_Linear.png')
            .addFields(
                { name: 'Step 1:', value: 'If you are on the server longer than the bot, write -ct once in the chat, if the bot answers, a profile has been found, if it doesnt answer, write the message again until it answers (this is a bug and we are working hard to find a solution).' },
                { name: 'Step 2', value: 'now enter -ctadd @Username#1234 to add a contact who will be informed as soon as you are not in a good mood.'},
                { name: 'Step 3', value: 'enter -ct again and if everything worked out, you will see your contact person (please note that currently only one contact person per user is possible, but this will be corrected if you write on other servers and need help) '},
                { name: 'Step 4', value: 'now you can use -help to display further commands that you can use'},
                { name: 'more information?', value: 'use -info to get more information about suicide and mental illness '}
            )
            .addField('In these strange and stressful times, you’re not alone.', 'Helplines, also known as hotlines, exist to provide a confidential, non-judgemental space – for free.\n\nThey are staffed by supportive people, who provide immediate support, counselling and information.', false)
            .setImage('https://cdn.discordapp.com/attachments/856253281801994271/857712338307645440/IASP_Logo_Linear.png')
            .setTimestamp()
            .setFooter('The offered one who is there for you', 'https://cdn.discordapp.com/attachments/856253281801994271/858024585419948102/1_KYdE5HFhK1zwX0dsfoaZ9EP5w.png');
            await message.channel.messages.fetch({ limit: 1}).then(messages =>{
                message.channel.bulkDelete(messages)
            });
            message.channel.send(exampleEmbed);
        }
        else{
            await message.channel.messages.fetch({ limit: 1}).then(messages =>{
                message.channel.bulkDelete(messages)
            });
            message.reply("You do not have the authorisation to use this command!!")
        }          
            
    }
}