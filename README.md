# ✨ Discord Presence - Redshoter ✨

¡Bienvenido a **Discord Presence**!  
Este es el sistema de presencias de Discord más fácil de usar de todos.

---

## 📌 Descripción

Este proyecto es un pequeño script en Node.js que utiliza la librería [`discord-rpc`](https://www.npmjs.com/package/discord-rpc) para mostrar un estado personalizado (Rich Presence) en Discord.

Está configurado para mostrar que estás **“Haciendo Una Tarea”**, con estado adicional, botones y una imagen personalizada.

---

## 📁 Archivos incluidos

- **`presence.js`**  
  Script principal que se conecta a Discord y actualiza el Rich Presence con los detalles configurados.

- **`execute.bat`**  
  Archivo `.bat` que lanza el PowerShell en modo oculto para ejecutar tu Rich Presence sin ventana visible.

---

## ✅ Requisitos

- Tener Node.js instalado desde [https://nodejs.org/](https://nodejs.org/)
- Instalar el módulo `discord-rpc` ejecutando este comando en la terminal:

  npm install discord-rpc (Sí descargas todo, ya viene incluido en node_modules)

- Contar con un Client ID válido de tu app en Discord:  
  [https://discord.com/developers/applications](https://discord.com/developers/applications)

- Subir imágenes personalizadas (como `logo`) en la configuración de Rich Presence de tu aplicación.

---

## 🚀 Cómo usar

1. Clona o descarga este repositorio.
2. Instala las dependencias con:

   npm install (Sí descargaste todo, ya viene en node_modules)

3. Para ejecutarlo normalmente, abre una terminal y usa:

   node presence.js

4. Para ejecutarlo en segundo plano (sin ventana), simplemente ejecuta el archivo `execute.bat`.

---

## ⚙️ Personalización

- Cambia el `clientId` en `presence.js` por el de tu aplicación en Discord.
- Modifica el estado, detalles y claves de imagen (`largeImageKey`, etc.) en `presence.js` para mostrar lo que desees.
- Asegúrate de que las imágenes estén subidas correctamente en el apartado "Rich Presence Assets" del panel de tu aplicación.

---

## 🧠 Notas

- La ventana de consola no aparecerá al usar `execute.bat`.
- Para detener el proceso, abre el Administrador de tareas y finaliza `node.exe`.
- Para que se inicie automáticamente con Windows:
  - Pulsa `Win + R`, escribe `shell:startup` y presiona Enter.
  - Copia `execute.bat` dentro de esa carpeta.

---

## ❓ Soporte

¿Tienes dudas o necesitas ayuda?  
Abre un issue en este repositorio o contáctame por Discord.

---

## 💜 ¡Disfruta tu Rich Presence personalizado! 🚀