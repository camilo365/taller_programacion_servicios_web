/* filtrar numeros pares de un Array */

let arr = [2,8,7,4,2,1];

(function(arr){
    let contador = 0;
    for (let index = 0; index < arr.length; index++) {
        if((arr[index]) %2 == 0 && (arr[index] != 0)){
            contador++;
        }
    }
    console.log(contador)
})(arr);