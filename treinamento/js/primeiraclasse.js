/* Atribuir uma função à uma váriavel

const foo = function asd() {
    console.log("foobar")
}

foo()

*/



/* Passar uma função como um Argumento 

function dizOla() {
    return "Olá, "
}
function apresentaçao(funçaoMensagemOla, nome) {
    console.log(funçaoMensagemOla() + nome)
}

apresentaçao(dizOla, "JavaScript!")

*/


/* Retornar uma função 

function printaBrDev() {
    return function() {
        console.log("BrDev!")
    }
}

// COMO O VALOR DA FUNÇÃO ACIMA?

// Usando uma variável 
const myFunc = printaBrDev()
myFunc()

// Usando parênteses duplo
sayHello()()

*/