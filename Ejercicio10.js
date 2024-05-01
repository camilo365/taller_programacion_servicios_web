/* Verificar si la contraseña cumple con criterios de seguridad */
/* Logitud, caracteres especiales, cantidad de numeros */

const numeros = "0123456789";
const caracteres_especiales = "|°¬#$%&()=?¡¿{}[]/*-+";

const password = "admin12#35";

function validar(password){
    const  array_password = password.split('')
    let numeros_presentes = false;
    let caracteres_especiales_presentes = false;
    let Longitud = false; // mayor 8

    for(let caracter of array_password){ //validar numeros 

        for(let num of numeros){
            if(caracter == num && numeros_presentes == !true){
                numeros_presentes = true;
                break
            }
        }
        for(let especial of caracteres_especiales){
            if(especial == caracter && caracteres_especiales_presentes == !true){
                caracteres_especiales_presentes = true;
                break
            }
        }
    }
    if (password.lenght > 7){
        Longitud = true;
    }

    switch (true) {
        case numeros_presentes && caracteres_especiales_presentes && Longitud:
            console.log("Numeros presentes, caracteres especiales presentes y Longitud mayor o igual a 8.");
            break;
        case numeros_presentes && caracteres_especiales_presentes && !Longitud:
            console.log("Numeros presentes, caracteres especiales presentes y Longitud menor a 8.");
            break;
        case numeros_presentes && !caracteres_especiales_presentes && Longitud:
            console.log(" Numeros presentes, caracteres especiales no presentes y Longitud mayor o igual a 8.");
            break;
        case numeros_presentes && !caracteres_especiales_presentes && !Longitud:
            console.log(" Numeros presentes, caracteres especiales no presentes y Longitud menor a 8.");
            break;
        case !numeros_presentes && caracteres_especiales_presentes && Longitud:
            console.log("Numeros no presentes, caracteres especiales presentes y Longitud mayor o igual a 8.");
            break;
        case !numeros_presentes && caracteres_especiales_presentes && !Longitud:
            console.log("Numeros no presentes, caracteres especiales presentes y Longitud menor a 8.");
            break;
        case !numeros_presentes && !caracteres_especiales_presentes && Longitud:
            console.log("Numeros no presentes, caracteres especiales no presentes y Longitud mayor o igual a 8.");
            break;
        case !numeros_presentes && !caracteres_especiales_presentes && !Longitud:
            console.log("Numeros no presentes, caracteres especiales no presentes y Longitud menor a 8.");
            break;
    }

}

validar(password)





