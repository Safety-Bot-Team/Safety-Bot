module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async  execute(client, message, args, Discord) {
        let role = message.guild.roles.cache.find(r => r.name === "Mod");

        if(message.member.permissions.has("ADMINISTRATOR")){
            if (!args[0]) return message.reply("Gebe eine zahl ein...");
    
            if(isNaN(args[0])) return message.reply("Kennst du überhaupt zahlen?");
    
            if(args[0] > 100) return message.reply("Discord erlaubt es nicht mehr als 100 nachrichten zu löschen pff...");
            
            if(args[0] < 1) return message.reply("Alter!!! Was willst du überhaupt damit?");
    
            await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages)
            });
        }else {
            message.channel.send("Was denkst du, wer du bist du Sklave");
        }
    }
}   
