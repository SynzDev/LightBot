module.exports = class BaseCommand {
  constructor(name, category, aliases) {
    this.name = name; // defines name
    this.category = category; // defines category
    this.aliases = aliases; // defines aliases
  }
}