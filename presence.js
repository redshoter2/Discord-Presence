const RPC = require("discord-rpc");

const clientId = "1373657858872315904";
RPC.register(clientId);

const rpc = new RPC.Client({ transport: "ipc" });

rpc.on("ready", () => {
  rpc.setActivity({
    details: "Programando Bots",
    state: "preparando configuraciones...",
    startTimestamp: new Date(),
    largeImageKey: "logo",
    largeImageText: "Roody's Shop",
    instance: false,
  });

  console.log("Rich Presence iniciado.");
});

rpc.login({ clientId }).catch(console.error);
