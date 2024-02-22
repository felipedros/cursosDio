/* se sobrar resto na divisão o numero é impar ,senão sobrar ele é par
 o operador %  é o resto da divisão.
 *ex: numero que é igual a 10 divido por 2 da 0 (par) se o numero tivesse o valor  5 o resultado seria 1 (impar)
* Agora, se o numero com valor 10 fosse dividido por 5 daria par por que ele é  par pois é multiplo de 5
*numero % 2 === 0; (o resto da divisão não é igual a 0 ,entao é impar FALSE.
*coloque as contas entre parenteses. 
*/




const numero = 10;

const numeroPar = (numero % 2 )=== 0;

console.log(numeroPar );