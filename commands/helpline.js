const { get } = require("mongoose");
const profileModel = require('../Models/profileSchema')
module.exports = {
    name: 'helpline',
    description: "check",
    aliases: ["helpl", "line", "number"],
    async execute(client, message, cmd, args, Discord, profileData){ 
        if(profileData.country === "Null") return message.reply("Please add a country to your profile, using -lang");
        else{
            switch (profileData.country){
                case "de":
                    message.reply("Nummer: 0800 1110111");
                break;
                case "gb":
                    message.reply("Number: 116 123");
                break;
                case "us":
                    message.reply("Number: 800 273 8255");
                break;
                case "prt":
                    message.reply("Número: ^225 50 60 70");
                break;
                case "esp":
                    message.reply("Como desgraciadamente España no tiene su propio número de emergencias, hemos escogido el número más cercano a ellos (Portugal), les ayudarán así y les escucharán. \nNúmero: ^225 50 60 70");
                break;
            }
        }
    }
}