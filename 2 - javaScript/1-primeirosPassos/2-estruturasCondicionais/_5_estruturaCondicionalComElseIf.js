/* else if é acionado quando nao é sim nem não 

*/


const numero = 7;

const numeroDivisivelPor5 = (numero % 5)=== 0;

if (numero=== 0){
    console.log ("numero inválido")

} else if (numeroDivisivelPor5){
    console.log("sim");
} else if (numero===6){
        console.log("numero invalido");
}

 else {
    console.log("não")

}