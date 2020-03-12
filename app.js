const argv = require('./config/yargs').argv
const color = require('colors'); // Libreria para cambiar los colores de la consola

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0]; // Posicion [0] del arreglo argv 

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado> ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}