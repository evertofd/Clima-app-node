const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({

    address: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



const getInfo = async(address) => {
    try {
        const coords = await lugar.getPlaceLatLng(address);
        const temp = await clima.getWeather(coords.lat, coords.lng);
        return `El clima de ${coords.address} es de ${temp}.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${address}`;

    }

}

getInfo(argv.address)
    .then(console.log)
    .catch(console.log);