const Discord = require("discord.js");
  const kboosh = new Discord.Client();
const kbooshtoken = "NjQyNzcxNDIzMjc3ODc1MjEy.XcbxoA.Klxe2fF7iKlfqH_THwLDD02Nl-E"
      kboosh.on('ready', () => {
        kboosh.user.setGame(`Made By MadeVAR`,'https://www.twitch.tv/MadeVar-Broadcast');
          console.log('Im Ready! boiiiiiii');
  
        });

  kboosh.on('message', message => {
    if (message.content.split(' ')[0] == '!b')
        message.guild.members.forEach(member => {
            if (!message.member.hasPermission("ADMINISTRATOR")) return;


            member.send(`${member}` + " " + message.content.substr(3));
                                                      message.delete();
            
                                                    });
            
                                                  });
   kboosh.on("message", message => {
       var prefix = "!";
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "b")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                          if (!args[1]) {
                            
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription("**:white_check_mark: | Message Has Been Sent**")
                                     .setColor("#e310b5")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription('**:white_check_mark: | Message Has Been Sent!**')
                                               .setColor("#e310b5")
                               
                                                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});
kboosh.login(`NjQyNzcxNDIzMjc3ODc1MjEy.XcbxoA.Klxe2fF7iKlfqH_THwLDD02Nl-E`);