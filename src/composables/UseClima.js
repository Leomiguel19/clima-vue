export default function useClima(){

    const obtenerClima = ({ciudad, pais}) => {
        console.log('ciudad...', ciudad)
        console.log('pais...', pais)
    }

    return {
        obtenerClima
    }
}