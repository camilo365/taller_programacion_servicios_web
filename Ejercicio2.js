/* Calcular el factorial de un numero dado */

const num = 5;

(function(num) {
    let f = 1; 
    for (let index = 1; index <= num; index++) {
        
        f *= index
    }
    console.log(f)
}) (num);