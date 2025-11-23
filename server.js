const http = require('http');
const app = require('./app');

const PORT = process.env.PORT;
const HOST = process.env.IP || '127.0.0.1';

http.createServer(app).listen(PORT, HOST, () => {
    console.log(`✅ Servidor corriendo en http://${HOST}:${PORT}`);
});
