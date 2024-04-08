/* Criando Arrays Recaptulação 

const meuArrayLiteral = [1, 2, 3] // Forma literal

const meuArrayConstructorInstance = new Array(1, 2, 3)

const meuArrayConstructorCall = Array(1, 2, 3)

const meuArrayFrom = Array.from(meuArrayLiteral)

const meuArraySpread = [...meuArrayFrom]

""

*/









/* INSERIR E REMOVER ELEMENTOS DAS EXTREMIDADES 

const arr = [1]

arr.push(2)

arr.unshift(10)

arr.shift()

arr.pop()

""

*/








/* REMOVER ELEMENTOS EM QUALQUER PONTO 

const arrRemoveAnyPoint = [1, 2, 5, 3]

arrRemoveAnyPoint.splice(1, 2) // Isso serve para deletar elementos dentro do seu Array! Primeiro você escolhe onde irá começar a "deletação" e quantos elementos serão deletados. Ex: Nesse exemplo, o código ".splice(1, 2)" irá deletar os elementos 2 e 5 do (arrRemoveAnyPoint = [1, 2 , 5, 3]) lembrando que começa a contagem apartir do indice 0!!!

 debugger
 
 */







 /* PREENCHER UM ARRAY COM VALORES 

 const arrPreenchido = new Array(10)

 arrPreenchido.fill(5, 1) // Comecei com dez no Array (arrPreenchido = new Array(10)), porém quero preencher com outro valores o meu Array! Para isso devemos utilizar o metodo ".fill(5, 1)". O primeiro argumento é o valor a ser preenchido "5" e o segundo argumento é onde vai começar o preenchimento. Ex: undefined, 5, 5, 5, 5, 5, 5, 5, 5, 5. Caso queira colocar um termino basta fazer o seguinte. Ex: ".fill(5, 0, 5)", ele começará do inicio e terminará indice "5" (5, 5, 5, 5, 5).

 debugger
 
 */








/* CRIAR UM SUB ARRAY A PARTIR DE UM ARRAY 

const arrSubArray = ["Brazilian", "Developer", "JavaScript", "Python", "Node"]

const arrSubArray2 = arrSubArray.slice(2) // Esse metodo serve para fatiar um Array. No caso o metodo "arrSubArray2 = arrSubArray.slice(2)" irá copiar "JavaScript", "Python" e "Node" de (arrSubArray) e colocar em (arrSubArray2), criando assim um Sub-Array!

debugger

*/









/* ORDENAR UM ARRAY 

const arrayOrdenado = [2, 3, 1, 10, 9, 4, 5, 9, 8, 0]

arrayOrdenado.sort((a, b) => a - b) // Dessa forma ficará ordenado da maneira desejada. O código "arrayOrdenado.sort((a, b) => a - b)" caso usasemos apenas o metodo ".sort()" a ordem não sairia da forma desejado. 1° Se a - b for negativo, quer dizer que a ordem está correta. 2° Se a - b for igual a 0, quer dizer que os números são iguais e não vai acontecer nada. 3° Se a - b for positivo, NESSE CASO OS ELEMENTOS TROCAM DE POSIÇÃO, pois a ordem está errada.

debugger

*/







/* FILTER, FIND, FOREACH, MAP, REDUCE */

// Estudar mais sobre isso!

const arrBase = [
    {a: 2, b: 2},
    {a: 1, b: 2},
    {a: 5, b: 2},
    {a: 1, b: 2},
    {a: 10, b: 2}
]

const filtered = arrBase.filter(el => el.a > 2)

const find = arrBase.find(el => el.a == 10)

const forEach = arrBase.forEach(el => console.log(`a: ${el.a}, b: ${el.b}`))

const maped = arrBase.map(el => el.a += 1)

const reduce = arrBase.reduce((acc, curr) => acc = acc + curr.a, 0)

debugger