const express = require('express')
const app = express()   ///nos permite usar express

// app.get('/',  (req, res)=> { //todas las peticioines entran por /
//   res.send('Hola Mundo')
// });

// app.listen(3000)

/***************************************************************************** */

// app.get('/', (req, res) => { //todas las peticioines entran por /
//   let salida = {
//     nombre: 'Miguel',
//     apellido: 'Dulcey',
//     url: req.url
//   }
//   res.send(salida);
// });

// app.get('/saludo', (req, res) => { //todas las peticioines entran por /  
//   res.send('Hola Mundo');
// });

// app.listen(3000,()=>{
//   console.log('Escuchando peticiones puerto 3000');  
//   console.info('servidor disponible en: http://localhost:3000');
// })

// /***************************************************************************** */
// //que pasa si quiero servir una pagina web.. creala public....

// const express = require('express')
// const app = express()   ///nos permite usar express

// //una instru o caallback que se ejecuta siempre sim importar la url que la persona pida
// app.use(express.static(__dirname+'/public'));
// //si quiero mostrar la pagina home debo colocar .html

// app.get('/saludo', (req, res) => { //todas las peticioines entran por /  
//   res.send('Hola Mundo');
// });

// app.listen(3000,()=>{
//   console.log('Escuchando peticiones puerto 3000');  
//   console.info('servidor disponible en: http://localhost:3000');
// })


// /***************************************************************************** */
// //que pasa si quiero servir una pagina web.. creala public....
// //una instru o caallback que se ejecuta siempre sim importar la url que la persona pida
// app.use(express.static(__dirname+'/public'));
// //si quiero mostrar la pagina home debo colocar .html

// app.set('view engine','hbs');

// app.get('/', (req, res) => { //todas las peticioines entran por /  
//   res.render('home.hbs',{
//     nombre:'Miguel',
//     anio:new Date().getFullYear()
//   });
// });

// app.listen(3000,()=>{
//   console.log('Escuchando peticiones puerto 3000');  
//   console.info('servidor disponible en: http://localhost:3000');
// })


// /***************************************************************************** */
// const hbs=require('hbs');
// //__dirname no impora cual direccion tenga, toma esa variable y concatena la rua
// app.use(express.static(__dirname+'/public'));

// //express hbs engine
// hbs.registerPartials(__dirname+'/views/parciales')
// app.set('view engine','hbs');

// //helpers
// hbs.registerHelper('getAnio',()=>{
//   return new Date().getFullYear();
// })

// hbs.registerHelper('capitalizar',(texto)=>{
//   let palabras=texto.split(' ');
//   palabras.forEach( (palabra,idx)=>{
//     palabras[idx]=palabra.charAt(0).toUpperCase()+palabra.slice(1).toLowerCase()
//   })

//   return palabras.join('');
// })

// app.get('/', (req, res) => { 
//   res.render('home.hbs',{
//     nombre:'MigUel angeL',
    
//   });
// });

// app.get('/about', (req, res) => { 
//   res.render('about.hbs');
// });

// app.listen(3000,()=>{
//   console.log('Escuchando peticiones puerto 3000');  
//   console.info('servidor disponible en: http://localhost:3000');
// })


/***************************************************************************** */
const hbs=require('hbs');
require('./hbs/helpers')

app.use(express.static(__dirname+'/public'));

//express hbs engine
hbs.registerPartials(__dirname+'/views/parciales')
app.set('view engine','hbs');

app.get('/', (req, res) => { 
  res.render('home.hbs',{
    nombre:'MigUel angeL',
    
  });
});

app.get('/about', (req, res) => { 
  res.render('about.hbs');
});


//para subir a heroku, variables de entrono
//otro cambio en el packajejson
//heroku no sabe que comando correr
const port =process.env.PORT || 3000; 
app.listen(port,()=>{
  console.log(`Escuchando peticiones puerto ${port}`);  
  console.info(`servidor disponible en: http://localhost:${port}`);
})