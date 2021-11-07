module.exports = {
    name: 'clear',
    description: "Clear messages!",
    aliases: [],
    userperms: [],
    async  execute(client, message, args, Discord) {

            if (!args[0]) return message.reply("Gebe bitte die anzahl der zu löschenen zahlen ein! (1-99)");
    
            if (isNaN(args[0])) return message.reply("Gebe bitte die anzahl der zu löschenen zahlen ein! (1-99)");
    
            if(args[0] > 100) return message.reply("Discord erlaubt es nicht mehr als 100 nachrichten");
            
            if (args[0] < 1) return message.reply("Du kannst nicht 0 nachrichten löschen");
    
            await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages)
            });
    }
}   
