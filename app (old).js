// Requireds
// Hay 3 tipos de require: 
//                const exp = require('express'); --> paquete que se instala (no propio de Node)
//                const fs = require('fs'); --> paquete que viene instalado con node (node.org)
//                const fs = require('../fs') --> de archivos que nosotros creamos en el proyecto

//Destructuraciòn
const { crearArchivo } = require('./multiplicar/multiplicar')

//let base = 'abc';
//En el process
//console.log(process.argv);
// let data = '';

// //Hacer un for que imprima en consola la tabla del 2 hasta 10
// for (let i = 1; i <= 10; i++) {
//     resultado = base * i;
//     data += `${base} * ${i} = ${base * i} \n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido creado!`);
// });

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => console.log(err));

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));

console.log(base);