// Criar uma String
/*
const str1 = String("Brazilian Dev1")
const str2 = String("Brazilian Dev2")
console.log(`str1 ${str1} str2 ${str2}`)

console.log(`str1 dividida = ${str1.split('')} str2 dividida = ${str2.split('')}`)

const str2Convertido = str2.valueOf()
console.log(typeof str2Convertido)
*/






// Criar um número
/*
const num1 = Number('1')
const num2 = new Number('2') // Esse método não é recomendado, pois ele gera falsos positivos.

console.log(`num1 ${num1} num2 ${num2}`)

console.log(`num1 com 2 casas decimais ${num1.toFixed(2)} num2 com 3 casas decimais ${num2.toFixed(3)}`)
*/







// Criar um booleano
const bool1 = Boolean(0)
const bool2 = new Boolean('') // Novamente, isso não é recomendado!

console.log(`bool1 ${bool1} bool2 ${bool2}`)

console.log(`bool1.toString() = ${bool1.toString()} bool2.toString() = ${bool2.toString()}`)