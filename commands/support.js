const Discord = require("discord.js");

const sendError = require("../util/error");

module.exports = {
  info: {
    name: "Support",

    description: "To Show the link of support server",

    usage: "",

    aliases: []
  },

  run: async function(client, message, args) {
    const embed = new Discord.MessageEmbed()

      .setAuthor("Invite Link of Bot")

      .setColor("BLUE")

      .setDescription("[Support](https://discord.gg/3K4HeYz)")

      .setFooter("Reach out to support server for any kind of help");

    message.channel.send(embed);
  }
};
