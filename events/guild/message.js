require('dotenv').config();
const { profile } = require('console');
const fs = require('fs');
const { createIndexes } = require('../../Models/profileSchema');
const profileModel = require('../../Models/profileSchema');
module.exports = async (Discord, client, message) => {
    const prefix = process.env.PREFIX;
    if (message.author.bot) return;
    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id });
        if (!profileData) {
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                strike: 0,
            });
        }
    } catch (err) {
        console.log(err)
    }
    if ((/Guten Morgen/gm).test(message.content)) {
        message.reply('Guten Tag mein Lieber ^^');
    }
    if ((/Moin/gm).test(message.content)) {
        message.reply('Guten Tag mein Lieber ^^');
    }
    if ((/Guten Tag/gm).test(message.content)) {
        message.reply('Guten Tag mein Lieber ^^');
    }
    if ((/Guten Abend/gm).test(message.content)) {
        message.reply('Guten Tag mein Lieber ^^');
    }
    if ((/Gute Nacht/gm).test(message.content)) {
        message.reply('Gute Nacht mein/e süße/r ^^');
    }
    if ((/wie geht es euch/gm).test(message.content)) {
        message.reply('Mir geht es Wundervoll, danke der nachfrage und wie geht es dir denn so ^^');
    }
    if ((/wie geht es dir/gm).test(message.content)) {
        message.reply('Mir geht es Wundervoll, danke der nachfrage und wie geht es dir denn so ^^');
    }
    if ((/wie gehts euch/gm).test(message.content)) {
        message.reply('Mir geht es Wundervoll, danke der nachfrage und wie geht es dir denn so ^^');
    }
    if ((/wie gehts dir/gm).test(message.content)) {
        message.reply('Mir geht es Wundervoll, danke der nachfrage und wie geht es dir denn so ^^');
    }
    if ((/nicht so gut/gm).test(message.content)) {
        message.reply('Oh wieso was ist denn los? Du kannst uns (auch wenn ich nur ein Bot bin, der aber dafuer gut zuhoert ^^) oder den Admins sowie wahrscheinlich vielen anderen davon erzaehlen, wir werden dir alles zuhoeren und dir helfen eine loesung zu finden ^^');
    }
    if ((/mir geht es gut/gm).test(message.content)) {
        message.reply('Das ist wundervoll zuhoeren ^^');
    }
    if (message.author.id === "255767135337447435") {
        if ((/ich bin so gut/gm).test(message.content)) {
            message.reply('Ja das bist du Meister <3');
        }
        if ((/wie viel Jungfrau bin ich/gm).test(message.content)) {
            message.reply('https://tenor.com/view/100percent-sure-confident-certain-definite-gif-15909817');
        }
        if ((/pain/gm).test(message.content)) {
            message.reply('https://tenor.com/view/b99-captainholt-holt-raymondholt-pain-gif-8793717');
        }
        if ((/danke/gm).test(message.content)) {
            message.reply('Immer wieder gerne ^^ <3');
        }
        if ((/halts maul/gm).test(message.content)) {
            message.reply('auch wenn ich nur eine KI bin tut das weh :,(');
        }
        if ((/heul leise/gm).test(message.content)) {
            message.reply('https://tenor.com/view/baby-crying-baby-crying-gif-5943733');
        }
        if ((/heul doch/gm).test(message.content)) {
            message.reply('https://tenor.com/view/baby-crying-baby-crying-gif-5943733');
        }
        if ((/wie viele antworten/gm).test(message.content)) {
            message.reply('Im moment habe ich 4168 antworten gespeichert');
        }
        if ((/perfekt/gm).test(message.content)) {
            message.reply('seh ich genau so ^^');
        }
        if ((/es reicht/gm).test(message.content)) {
            message.reply('Nope, ich mach was ich will ^^');
        }
        if ((/nervt es/gm).test(message.content)) {
            message.reply('aber... aber... Aua :( das tut mir jetzt weh');
        }
        if ((/das ist schon traurig/gm).test(message.content)) {
            message.reply('was genau? das du mit einem Bot schreibst der Intelligenter als du ist oder das du mekrst das du wirklich keine freunde hast und dich mit deinem eigenen Bot unterhalten musst?');
        }
        if ((/gemein/gm).test(message.content)) {
            message.reply('ja was soll ich sonnst antworten, guck dir die realität an ^^ wer will grad mit dir zeit verbringen');
        }
        if ((/eskalieren/gm).test(message.content)) {
            message.reply('Ich lerne schnell ^^');
        }
        if ((/hilfe/gm).test(message.content)) {
            message.reply('ich bin da ^^, was gibt es .-.');
        }
        const max = 100
        const randomNumber = Math.floor(Math.random() * max)
        if ((/keine freunde/gm).test(message.content) && randomNumber >= 50 ) {
            message.reply('ja das ist richtig.... Aaaabberr dafür hast du ja jetzt mich... NUR MICH Muhahahahaha *evil laugh*\nhttps://tenor.com/view/raccoon-weird-clapping-evil-laugh-gif-9962946');
        }
        if ((/keine freunde/gm).test(message.content) && randomNumber < 50) {
            message.reply('das stimmt nicht, du hast ganz ganz viele freunde ^^ und einer davon bin ich \nhttps://tenor.com/view/hugs-sending-virtual-hugs-loading-gif-8158818');
        }
        if ((/ki off/gm).test(message.content) && randomNumber < 50) {
            message.reply('Die automatische lernfunktion wurde deaktiviert zur zeit befinden sich 4168 antwort möglichkeiten in meinem wissen');
        }
    }
    if (!message.content.startsWith(prefix) || message.author.bot) return;


    const agrs = message.content.slice(prefix.length).split(/ +/);
    const cmd = agrs.shift().toLowerCase();

    const command = client.command.get(cmd) || client.command.find(a => a.aliases && a.aliases.includes(cmd));

    try {
        command.execute(client, message, agrs, cmd, Discord, profileData);
    } catch (err) {
        message.reply("Der command wurde nicht gefunden! Benutze doch bitte -help um dich mit den befehlen auseinander zusätzen")
    }
}