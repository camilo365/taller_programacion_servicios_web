/* Implementa una función que verifique si una palabra es un palíndromo (se
lee igual de izquierda a derecha que de derecha a izquierda). */

function es_palindromo(palabra){
    palabra = palabra.toLowerCase().replace(/\s/g, '');
    if(palabra === palabra.split('').reverse().join('')){
        console.log("la palabra es palindroma")
    }else{
        console.log("no es palindroma")
    }
}
es_palindromo(process.argv[2])


function palindromo() {
    let palabra = process.argv[2]
    let esPalindromo = true;

    for (let i = palabra.length - 1, j = 0; i >= 0; i--, j++) {
        console.log(palabra[i]);

        if (palabra[i] !== palabra[j]) {
            esPalindromo = false;
        }
    }
    if (esPalindromo) {
        console.log("es palindroma");
    } else {
        console.log("no es palindroma");
    }
}
palindromo()






