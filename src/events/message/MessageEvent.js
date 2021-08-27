const BaseEvent = require('../../utils/structures/BaseEvent'); // This is the base evemt

// initates the event
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  // runs the event code
  async run(client, message) {
    if (message.author.bot) return; // checks if the person who ran the command is a bot, if it is then do nothing
    if (message.content.startsWith(client.prefix)) { // checks if the message starts with the prefix, +
      const [cmdName, ...cmdArgs] = message.content // gets the content of the message
      .slice(client.prefix.length) // removes the prefix
      .trim()
      .split(/\s+/);
      const command = client.commands.get(cmdName.toLowerCase()); // gets the command name and ignores caps ex. +hElPmoDerAtIOn will still run
      if (command) { // if message is a command then run the command
        command.run(client, message, cmdArgs);
      }
    }
  }
}