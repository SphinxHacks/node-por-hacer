const fs = require('fs');

let listadoPorHacer = [];
let resultado = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
};



const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
        return (listadoPorHacer);
    } catch (error) {
        listadoPorHacer = [];
    }
};

const getListado = () => {

    cargarDB();
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    console.log(index);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

};

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        delete(listadoPorHacer[index]);
        listadoPorHacer = listadoPorHacer.filter(listaNueva => listaNueva !== null);
        guardarDB();
        return 'Borrado';
    } else {
        return 'Algo fallo';
    }

};



module.exports = {
    crear,
    cargarDB,
    getListado,
    actualizar,
    borrar
}