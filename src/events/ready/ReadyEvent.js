const BaseEvent = require('../../utils/structures/BaseEvent'); // base event

// initiates the event
module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }

  // runs the event code
  async run (client) {
    console.log(client.user.tag + ' has logged in.'); // when the bot logs in it will say bot#0000 has logged in (in the console)
  }
}