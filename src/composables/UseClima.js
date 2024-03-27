import axios from 'axios';

export default function useClima(){

    const obtenerClima = async ({ciudad, pais}) => {
        // Importar el API KEY
        const key = import.meta.env.VITE_API_KEY;

        try {
            // Obtener la lat, lng
            const url =`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`
            const {data} = await axios(url);
            const { lat, lon } = data[0];
            // Obtener el clima
            const urlCLima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
            const {data: dataClima} = await axios(urlCLima);
            console.log(dataClima);
        } catch (error) {
            console.log(error);
        }

    }

    return {
        obtenerClima
    }
}