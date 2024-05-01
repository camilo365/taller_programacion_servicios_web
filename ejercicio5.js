/* Escribe una función para calcular el área de un círculo. Puedes
utilizar funciones declarativas. */


function areacirculo(radio){
    let pi = Math.PI
    let areadecirculo = pi * (radio ** 2)
    console.log(areadecirculo)
}

areacirculo(process.argv[2],)
