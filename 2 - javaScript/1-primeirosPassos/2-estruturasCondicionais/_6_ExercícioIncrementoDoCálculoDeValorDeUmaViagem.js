/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/


const precoDoEtanol = 3.55;
const precoDaGasolina = 5.55;
const kmPorLitros = 8;
const distanciaEmKm = 200;
const tipoDoCombustivel = "Gasolina";

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoDoCombustivel === "Etanol") {
    const valorGasto = litrosConsumidos * precoDoEtanol;
    console.log(valorGasto.toFixed(2));
}
else {
    const valorGasto = litrosConsumidos * precoDaGasolina
    console.log(valorGasto.toFixed(2));
}




