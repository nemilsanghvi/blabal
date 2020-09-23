const Discord = require("discord.js");

const sendError = require("../util/error");

module.exports = {
  info: {
    name: "support",

    description: "To Show the link of support server",

    usage: "",

    aliases: []
  },

  run: async function(client, message, args) {
    const Embed = new Discord.MessageEmbed()

      .setAuthor("Invite Link of Bot")

      .setColor("GREEN")

      .setDescription(
        " ☣️ Join the [Support Server](https://discord.gg/HAsZCN9) for any kind  support"
      )

      .setFooter("");

    message.channel.send(Embed);
  }
};
