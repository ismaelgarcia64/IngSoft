//servidor web
var Http = require( 'http' ); //requiere es importacion, se importa el paquete http y se le asigna a HTTP
var server = Http.createServer(function(request,response){
    console.log('Solicitud entrante...');
    console.log(request.url);
    console.log(request.method);
    response.write("Hola desde el node");// no se envía por que no se indica fin de la respuesta
    response.end();
});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
