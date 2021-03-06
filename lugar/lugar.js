const axios = require('axios');

const getPlaceLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);



    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: { 'X-RapidAPI-Key': '0038d2ec2fmshbe80dacb9724a6fp1a55f4jsn9272f9c8eed6' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir} `);
    }

    const data = resp.data.Results[0];
    const address = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        address,
        lat,
        lng

    }

}



module.exports = {
    getPlaceLatLng
}