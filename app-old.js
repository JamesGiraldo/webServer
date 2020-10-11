const http = require('http');
const colors = require('colors');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'James Andres',
            apellido: 'Giraldo Escorcia',
            edad: 21,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        // res.write('hola mundo');
        res.end();
    })
    .listen(8080);
console.log('Estoy en el puerto 8080'.green);