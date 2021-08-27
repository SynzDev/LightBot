
const { Client } = require('discord.js'); // imports discord.js
const { registerCommands, registerEvents } = require('./utils/registry'); // register commmands/events
const config = require('../slappey.json'); // this is the bot config
const client = new Client(); // starts the bot client

(async () => { // code that runs on startup
  client.commands = new Map(); // makes a commands map
  client.events = new Map(); // makes a events map
  client.prefix = config.prefix; // defines a prefix
  await registerCommands(client, '../commands'); // waits for commands to register
  await registerEvents(client, '../events'); // waits for events to register
  await client.login(config.token); // logs the bot in
})();

