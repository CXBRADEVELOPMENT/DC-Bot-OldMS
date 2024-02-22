const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let botembed = new Discord.MessageEmbed()
        .setDescription("HazeV Discordbot - Hilfe")
        .setColor("#c88e38")
        .setThumbnail("https://cdn.discordapp.com/icons/803387433433301022/a_625b4d8aaaae35de3b8eda52d58694bc.webp?size=128")
        .addField("Befehle", `.help - S.O.S.
    .ping - Gibt den Ping der einzelnen Services aus. (A)
    .uptime - Gibt aus, wie lange der Bot schon läuft. (A)
    .discord - Trete dem offiziellen C-Development-Discord bei. (A)

	Ticket Befehle
    .accept - Um das Ticket anzunehmen. (T)
	.delete - Um das Ticket zu Löschen. (T)
	
	CarCreator Befehle
	.accept - Um das Ticket anzunehmen. (C)
    .payed - Um das Ticket auf bezahlt zu setzen. (C)
	.delete - Um das Ticket zu Löschen. (C)
	.ready - Um das Ticket auf Fertig für die Abholung zu setzen. (C)

    Team Befehle
    .cc - Löscht Textnachrichtren.[Nicht länger als 14Tage alt!] (T)
    
    Legende
    (A) = Alle, (T) = Teamler, (C) = CarCreator
    `)
        .setFooter('Bot von HazeV - Coded by CXBRADEVELOPMENT');
    await message.channel.send(botembed);


    let supPin = new Discord.MessageEmbed()
        .setDescription("HazeV Discordbot - SupportPIN")
        .setColor("#c88e38")
        .addField("Befehle", `
        Sollte es Probleme mit dem bot geben, brauchst due den Support PIN.
        Mache ` + "`.discord`" +` um den C-Development Discord zu Joinen und erstelle ein Ticket, mit der Support-PIN
        
        Der C-Development Support-PIN für den Support des Bots:
        SupportPIN: CD-00001
    `)
        .setFooter('Bot von HazeV - Coded by CXBRADEVELOPMENT');
    await message.channel.send(supPin);
}

module.exports.help = {
    name: "help",
    name1: "HELP"
}