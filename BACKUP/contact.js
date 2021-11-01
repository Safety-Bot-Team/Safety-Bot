const message = require("../events/guild/message");

module.exports = {
    name: 'contact',
    description: "check",
    aliases: ["ct", "con"],
    async execute(client, message, cmd, args, Discord, profileData){
        const memberTarget = client.guilds.cache.get(profileData.serverID).members.cache.get(profileData.contact);
        try{
            if(profileData.contact !== ""){
                message.channel.send(`${message.author.username}, your contact person is ${memberTarget}`); 
            }else{
                message.channel.send("If u want to add one you can just type -addct [usermention] if you have no one just add me (Unterwegs#6666) i will be there for you")
            }
        }catch(err){
            message.reply("If u want to add one you can just type -addct [@usermention] if you have no one just add me (Unterwegs#6666) i will be there for you")
        }
    }
}