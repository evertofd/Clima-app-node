const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ace55d6130bdc366fed533ccb5071d30&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}