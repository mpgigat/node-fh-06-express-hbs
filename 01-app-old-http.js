//node api http

// const http=require('http');


// http.createServer((req,res)=>{
//     res.write('Hola Mundo');
//     res.end();
// }).listen(8080);

// console.log('Escuchando el puerto 8080');


//***************************************************************************** */

const http=require('http');

http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type':'application/json'});

    let salida={
        nombre:'Miguel',
        apellido:'Dulcey',
        url:req.url
    }

    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');

//esto es un poco complicado y a medida que crece lo va a ser aun mas.. por eso express