/* Contar cantidad de palabras en un cadena */

let palabra = "  El mundo de los programdores    ";

function contarPalabras(palabra) {
    let palabra2 = palabra.trim()
    palabra2 = palabra2.split(' ');

    console.log("Numeros de palabras: ",palabra2.length)
}

contarPalabras(palabra)
