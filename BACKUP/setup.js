module.exports = {
    name: 'setup',
    description: "setup",
    async execute(client, message, args){
        const Discord = require('discord.js');
        if(message.member.permissions.has("MANAGE_CHANNELS")){
            // Create a new channel with permission overwrites
            message.guild.channels.create('safety-bot', {
            type: 'text',
            permissionOverwrites: [
            {
                id: message.guild.roles.everyone,
                allow:['VIEW_CHANNEL','READ_MESSAGE_HISTORY'],
                deny: ['SEND_MESSAGES'],
            },
            ],
            })
            .then(console.log)
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#00ffeb')
            .setTitle('How to use')
            .setURL('https://findahelpline.com/i/iasp')
            .setAuthor('Safety-Bot', 'https://cdn.discordapp.com/attachments/856253281801994271/858024585419948102/1_KYdE5HFhK1zwX0dsfoaZ9EP5w.png', 'https://findahelpline.com/i/iasp')
            .setDescription('Thank you for inviting the Safety Bot to your server and bringing us one step closer to our goal of helping as many people as possible. \nIn the following, you will find step-by-step instructions on how to set up the Safety Bot for the first time. \n\n')
            .setThumbnail('https://cdn.discordapp.com/attachments/856253281801994271/857712965554143272/IASP_Logo_Linear.png')
            .addFields(
                { name: 'Step 1:', value: 'go to the newly created channel and enter -setup2. the bot should now create and display a tutorial for each user of the bot, and it should also give a little information about why and what the bot is doing.' },
                { name: 'Attention:', value: 'Please make sure that the channel is available for everyone to see. Thank you  ', inline: true },
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