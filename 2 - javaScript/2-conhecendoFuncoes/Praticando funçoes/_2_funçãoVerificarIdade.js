/* Nesse caso a função escrevaMeunome retorna o nome descrito no parametro(nome) e a funçao verificar idade retorna a frase 'menor ou maior de idade ', usando as condiçoes do parametro (idade).

*/


function escrevaMeuNome(nome) {
    console.log('Meu nome é : ' + nome);

}


function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(' Maior de idade');
    } else {
        console.log('Menor de idade');
    }
}

escrevaMeuNome("Felipe")
escrevaMeuNome("Fer")
verificarIdade(15);


