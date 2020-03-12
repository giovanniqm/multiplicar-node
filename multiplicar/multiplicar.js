// REQUIRES
const fs = require('fs'); // Libreria para trabajar con el File System (TXT)
const color = require('colors'); // Libreria para cambiar los colores de la consola

// *** OTRA FORMAS DE DEFINIR "Files System" ***
/* # - const fs = require('express'); # Esta es una funcion a parte
   # - const fs = require('./fs'); 
*/

/*=====================================
	    Función Listar Tablas
======================================*/

let listarTabla = (base, limite = 10) => {

    console.log('===================='.yellow);
    console.log(`***-Tabla del ${base}-***`.blue);
    console.log('===================='.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`)
    }

}

/*=====================================
	    Función Crear Archivo
======================================*/

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido "${base}", no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }
        /*=====================================
        	    Función Guardar Archivos TXT
        ======================================*/
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);

        });

    });
}

// ESTA ES UNA FORMA DE TRABAJAR CON EXPORTS
module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}

// OTRA                                         
/* 
    module.export.crearArchivo = (base) => { 
*/