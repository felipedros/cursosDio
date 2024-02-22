/* Essa função digaMeuNome é uma função simples em JavaScript que aceita um parâmetro name e imprime uma mensagem no console concatenando a string 'Seu nome é: ' com o valor do parâmetro name.
Funçoes que não devovem nada como a primeira abaixo sõ chamadas de procedimentos.


function digaMeuNome(name) {
    console.log ('Seu nome é: '+ name);
}

digaMeuNome('Felipe');

digaMeuNome('Fernanda');
*/



/*
function quadrado(valor) {
    return valor+valor;

}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez)
*/




/* Nesse caso estou imprimindo o quadrado com valor 20 + o valor 10 que é igual a: 20*20(= 400) +10*10 (=100) ou seja 500.

function quadrado(valor) {
    return valor * valor;

}

console.log(quadrado(20) + quadrado(10));
*/


function imcrementarJuros(valor,percentualJuros) {
    const valorAcrescimo = (percentualJuros /100) - valor;
    return valor + valorAcrescimo;

}

console.log(imcrementarJuros(780,20));
console.log(imcrementarJuros(100,5));

/* Uma função é um pequeno trecho de codigo que agente pode invocar ele para ser executado varias vezes, com parametros iguais ou diferentes*/