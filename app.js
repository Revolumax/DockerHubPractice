// app.js
const express = require('express');
const app = express();

// Render asigna el puerto a través de process.env.PORT
const PORT = process.env.PORT || 3000;  

app.get('/', (req, res) => {
  res.send('Hola Mundo desde Docker y Render! 🚀');
});

// Escucha en 0.0.0.0 para que sea accesible desde Render
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});
