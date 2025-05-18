// Importamos la librería discord-rpc
const RPC = require("discord-rpc");

// Declaramos el Client ID de la aplicación que creaste en Discord Developers
const clientId = "TU_CLIENTID"; // Obtenlo en https://discord.com/developers/applications/ID_DE_TU_CLIENTE/oauth2

// Registramos el Client ID para el RPC (esto es necesario para algunas versiones)
RPC.register(clientId);

// Creamos una instancia del cliente RPC con transporte IPC (comunicación local con Discord)
const rpc = new RPC.Client({ transport: "ipc" });

// Evento que se dispara cuando el cliente RPC está listo y conectado a Discord
rpc.on("ready", () => {
  // Configuramos la actividad que aparecerá en el perfil de Discord
  rpc.setActivity({
    details: "",          // Texto principal (línea 1)
    state: "", // Texto secundario (línea 2)
    startTimestamp: new Date(),            // Marca de tiempo para mostrar cuánto tiempo llevas en esta actividad
    largeImageKey: "logo",                 // Imagen grande (debe coincidir con el nombre de la imagen subida en tu aplicación Discord)
    largeImageText: "",       // Tooltip al pasar sobre la imagen grande
    buttons: [
      { label: "🌍 Visitar la web", url: "https://roody.es" }, // Añade un primer botón
      { label: "💻 Unirse al Discord", url: "https://discord.roody.es" } // Añade un segundo botón
    ], // ‼️ Solamente se pueden usar 2 botones
    instance: false,                       // Indica si esta instancia es única
  });

  // Mensaje en consola para saber que el RPC está activo
  console.log("Rich Presence iniciado.");
});

// Iniciamos sesión en Discord con el Client ID especificado
rpc.login({ clientId }).catch(console.error);