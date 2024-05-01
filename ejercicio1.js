/* Suma de Números:

Escribe una función que tome dos números como parámetros y
devuelva su suma. */

function suma(val1,val2){

    let operacion =  val1+val2
    console.log(operacion)
}
suma(+process.argv[2], +process.argv[3])