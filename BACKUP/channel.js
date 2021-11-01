module.exports = {
    name: 'channel',
    description: "Also wirklich?",
    aliases: ['ch', 'text'],
    async execute(client, message, args, Discord){
        let role = message.guild.roles.cache.find(r => r.name === "Mod");

        if(message.member.permissions.has("ADMINISTRATOR")){
                // Create a new channel with permission overwrites
                message.guild.channels.create('ATTENTION', {
                type: 'text',
                permissionOverwrites: [
                {
                    id: message.guild.roles.everyone,
                    deny: ['VIEW_CHANNEL'],
                },
                ],
                })
                .then(console.log)
                message.channel.send(`jo aber ne`);
                args[0] = 1;
                if (!args[0]) return message.reply("Gebe eine zahl ein...");
    
                if(isNaN(args[0])) return message.reply("Kennst du überhaupt zahlen?");
        
                if(args[0] > 100) return message.reply("Discord erlaubt es nicht mehr als 100 nachrichten zu löschen pff...");
                
                if(args[0] < 1) return message.reply("Alter!!! Was willst du überhaupt damit?");
        
                await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
                    message.channel.bulkDelete(messages)
                });
        }
    }
}