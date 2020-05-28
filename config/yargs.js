/*let opt = {
    descripcion: {
        alias: 'd'
    }
};*/

const argv = require('yargs')
    .command('crear', 'Crea las tareas por hacer', {
        descripcion: {
            alias: 'd',
            desc: 'Muestra descripcion de comandos',
            version: '1.0.0'
        }
    })
    .command('listar', 'Lista las tareas por hacer', {

    })
    .command('actualizar', 'Actualiza una tarea por hacer', {
        descripcion: {
            alias: 'd',
            desc: 'Muestra descripcion de comandos'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borra una tarea', {
        descripcion: {
            alias: 'd'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}