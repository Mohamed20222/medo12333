const token = require("./botconfig.json").token;
const Discord = require("discord.js");
const botconfig = require('./botconfig.json')
const bot = new Discord.Client()

bot.on('ready', ready => {
    console.log(`${bot.user.username} is online`);
    bot.user.setActivity("!help", { type: "WATCHING" });

});
bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}report`) {

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!rUser) return message.channel.send("Couldnt find user.");
        let reason = args.join(" ").slice(22);

        let reportEmbed = new Discord.RichEmbed()
            .setDescription("Reports")
            .setColor("#1fcede")
            .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
            .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
            .addField("Report Time", message.createdAt)
            .addField("Channel", message.channel)
            .addField("Reason", reason);
        let reportschannel = message.guild.channels.find(`name`, "op")
        if (!reportschannel) return message.channel.send("couldnt find the channel.");

        if (message.deletable) message.delete();
        reportschannel.send(reportEmbed);

        return;

    }





    if (cmd === `${prefix}serverinfo`) {

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
            .setDescription("Server Information")
            .setColor("#570f0a")
            .setThumbnail(sicon)
            .addField("Server Name", message.guild.name)
            .addField("Created On", message.guild.createdAt)
            .addField("You Joined", message.member.joinedAt)
            .addField("Total Members", message.guild.memberCount);

        return message.channel.send(serverembed);
    }




    if (cmd === `${prefix}hello`) {
        return message.channel.send("Hello, <@" + message.author.id + ">");
    }


    if (cmd === `${prefix}hi`) {
        return message.channel.send("hi, <@" + message.author.id + ">");
    }


    if (cmd === `${prefix}helperapp`) {
        return message.channel.send("https://www.youtube.com/results?search_query=proxy+tools+gather+proxy+pro+free<@" + message.author.id + "> ");
    }


    if (cmd === `${prefix}botinfo`) {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
            .setDescription("Bot Information")
            .setColor("#1fcede")
            .setThumbnail(bicon)
            .addField("Bot Name", bot.user.username)
            .addField("Date Created", bot.user.createdAt)
            .addField(`Bot Creator`, `MadeVar`)
            .addField(`Support Server`, `LINK`);
        return message.channel.send(botembed);

    }

    if (cmd === `${prefix}help`) {
        let helpembed = new Discord.RichEmbed()
            .setDescription("Help menu")
            .setColor("#1fcede")
            .addField(`To see bot info do`, `!botinfo`)
            .addField(`To see server info do`, `!serverinfo`);
        return message.channel.send(helpembed);

   }



    });

bot.login(token);