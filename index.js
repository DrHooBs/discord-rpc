const DiscordRPC = require("discord-rpc");
const { url } = require("inspector");
const client = new DiscordRPC.Client({ transport: "ipc" }); // Create client instance
require("dotenv").config(); // get .env file contents

(async () => {
  client.on("ready", async () => {
    //vvvvv This runs when the client isready
    await client
      .setActivity({
        // Setting the Rich Presence based on what is passed in here from our .env file.
        buttons: [
          {
            label: process.env.label,
            url: process.env.url,
          },
          {
            label: process.env.labelTwo,
            url: process.env.urlTwo,
          },
        ],
        details: process.env.details,
        //largeImageKey: "rpcIcon",
        largeImageText: process.env.imageAltTxet,
      })
      .catch((err) => console.log(err));

    console.log("Discord Rich Presence has been enabled.");
  });

  await client
    .login({ clientId: process.env.applicationID })
    .catch(console.error); // Logging into our application.
})();
