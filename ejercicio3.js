/* Crea una función que ordene un array de números de manera
ascendente. Puedes utilizar funciones flecha. */


let ascendente = () => {
    let numeros = [54,32,454,12,34,76,32,1,3,454,88,7654,908,112,343,556,332,675];
    
    numeros.sort((a, b) => a - b);
    return numeros;
}
console.log(ascendente());