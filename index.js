const { Client } = require("discord.js");
const client = new Client({intents: 1});
const { Token } = require("./config.json");

client.once("ready", () => {
  console.log("Started !");
  client.user.setActivity("Configuration ...", {type: "WATCHING"})
});

client.login(Token);