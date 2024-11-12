const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Sirve los archivos estáticos en la carpeta actual
app.use(express.static(path.join(__dirname, '/')));

// Ruta para el archivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});