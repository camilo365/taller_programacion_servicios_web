/* Generador de Tabla de Multiplicar:
nción que genere la tabla de multiplicar de un número
específico. */

function table(){
    const inputs = process.argv;
    let value = +inputs[2]
    let i = 1
    while(i<10){

        total = `${value} * ${i} = ${value*i} `

        i++

        console.table(total)
    }

}

table()