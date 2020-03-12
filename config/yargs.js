// yargs: Es una libreria, un paquete que está en los "node_modules"

const opciones = { // Este objeto contiene las configuraciones de: (la base y el limite)

    base: { // Este es el comando --base
        demand: true, // Esto es para definir que el comando es obligatorio
        alias: 'b' // Sin alias: --base | Con alias: -b
    },
    limite: {
        alias: 'l',
        default: 10 // Si el usuario no manda un valor para limite, el valor predeterminado es 10
    }

}

const argv = require('yargs') // yargs es una libreria, un paquete que está en los "node_modules"

/*=====================================
	    Comando Listar en Consola
======================================*/
// Los comandos tienen 3 parametros
// # Un Nombre | # Una Descripcion | # Un objeto que va a recibir la configuracion de parametros / flags que el comando va a recibir

.command('listar', 'Imprime en consola la tabla de multiplicar', opciones)

/*=====================================
	    Comando Crear en Consola
======================================*/

.command('crear', 'Crea un archivo con la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}