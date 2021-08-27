const BaseCommand = require('../../utils/structures/BaseCommand'); // This is just the base command in my handler
const Discord = require('discord.js'); // Imports discord from the discordjs package that is installed with npm i discord.js

// initiates the command class
module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'Info', []);
  }

  // this is what runs the code when the command is ran
  async run(client, message, args) {
    // this creates and defines the embed
    const helpEmbed = new Discord.MessageEmbed()
    .setTitle('Please choose a category!') // The title of the embed!
    .setDescription('`+helpfun +helputilities +helpmoderation`'); // description of the embed! (since its the last embed line we close it with a ;)
  }
}