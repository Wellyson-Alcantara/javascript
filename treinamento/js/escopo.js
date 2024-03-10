/*

for(let i = 0; i < 10; i++) {
    console.log(i)
}

for(var j = 0; j < 10; j++) {
    console.log(j)
}









*/

// Argumentos de função (parâmetros) são vistos como variáveis locais dentro da função.

/*

function paramsLocais(local1, local2) {
    console.log(local1, local2)
}

paramsLocais('Sou local 1', 'Sou local 2')

*/









// Outra situação é quando temos uma função dentro de outra.

/*

let nivelGlobal = 'Nível Global'
let nivel1 = undefined, nivel2 = undefined, nivel3 = undefined

function funçaoNivel1() {
    let nivel1 = 'Nível 1'

    function funçaoNivel2() {
        let nivel2 = 'Nível 2'

        function funçaoNivel3() {
            let nivel3 = 'Nível 3'
            console.log(`\nFunção nível 3 resultados: \n${nivelGlobal} \n${nivel1} \n${nivel2} \n${nivel3}`)
        }
        funçaoNivel3()

        console.log(`\nFunção nível 2 resultados: \n${nivelGlobal} \n${nivel1} \n${nivel2} \n${nivel3 ? nivel3 : 'nível3 inacessível'}`)
    }
    funçaoNivel2()

    console.log(`\nFunção nível 1 resultados: \n${nivelGlobal} \n${nivel1} \n${nivel2 ? nivel : 'nível2 inacessível'} \n${nivel3 ? nivel3 : 'nível3 inacessível'}`)
}

funçaoNivel1()

*/









// ALERTA!!! PRÁTICA ALTAMENTE PERIGOSA!!!
// Escopo global automático sem o uso das palavras reservadas let, const e var.

// EXEMPLO 1
let obj = {func: function(){a = 10; console.log(a)}}

obj.func()

a


// EXEMPLO 2
obj.func2 = () => {b=50; console.log(b)}
obj.func2()

b = 10

obj.func2()


// EXEMPLO 3 
obj.func3 = () => {let c=50; console.log(c)}
obj.func3() //retorna 50

c