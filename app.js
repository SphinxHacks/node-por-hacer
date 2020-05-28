const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/porhacer');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('======Por Hacer ======'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================'.green);
        }
        break;

    case 'actualizar':

        let status = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(status);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado.red);
        break;


    default:
        console.log('Comando no reconocido.');
        break;
}