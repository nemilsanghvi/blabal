const Discord = require("discord.js");

const sendError = require("../util/error");

module.exports = {
  info: {
    name: "Invite",

    description: "To Show the invite link of bot",

    usage: "",

    aliases: []
  },

  run: async function(client, message, args) {
    const Embed = new Discord.MessageEmbed()

      .setAuthor("Invite Link of Bot")

      .setColor("BLUE")

      .setDescription(
        " Here is My Invite Link [Invite Here](https://discord.com/oauth2/authorize?client_id=758235022120583168&permissions=268790848&scope=bot) "
      )

      .setFooter(
        "Currently the bot is in Beta if any problems arise do contact in the support sever."
      );
    message.channel.send(Embed);
  }
};
