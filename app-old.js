const http = require('http');


http.createServer( (req, res) => {

    //res.writeHead('201')

    res.write('Hola Mundo');
    res.end();

})
.listen(8080);

console.log('Escuchando el puerto', 8080);