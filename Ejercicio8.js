/* Calcular impuestos segun un porcentaje dado */

var dinero = 2000;
const impuesto = 15; //Porcentaje

function impuesto_pagar(dinero, impuesto) {
    let valor = dinero*(impuesto/100);
    console.log(valor);
}

impuesto_pagar(dinero, impuesto);