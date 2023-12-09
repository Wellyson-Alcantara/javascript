let contador = 0
let res = document.querySelector('section#resultado')
// As váriaveis declaradas aqui fora são consideradas GLOBAIS e funcionam dentro do programa dentro do programa  inteiro.

function contar() { // É a mesma coisa que contador + 1.
    contador ++ 
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`
}

function zerar() {
    contador = 0
    res.innerHTML = null
}