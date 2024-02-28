/* Nesse caso invocamos a funçao escrevameunome dentro do console.log.ela retorna uma frase e o parametro.

*/


function escrevaMeuNome(nome) {
    return ('Meu nome é : ' + nome);

}


function verificarIdade(idade) {
    if (idade >= 18) {
        console.log (escrevaMeuNome("Felipe :") + "  Maior de idade");
    } else {
        console.log(escrevaMeuNome("Felipe :") + '  Menor de idade');
    }
}


verificarIdade(15);



