// São funções usadas para construir objetos.


// O exemplo abaixo é de uma função construtora de ventiladores.

function Ventilador(velMax) {
    this.velocidadeMaxima = velMax
    this.ligado = false;
}




// Instâncias

// Para criar uma instância de um objeto do tipo "Ventilador" usamos a palavra reservada "new" seguida da chamada da função.
const ventilador1 = new Ventilador(3)

// Diferente de outras línguagens orientadas a objetos, podemos adicionar propriedades e métodos em tempo de execução.

ventilador1.cor = "branco"
console.log(ventilador1.cor)

ventilador1.ligaDesliga = function() {
    if(this.ligado) {
        this.ligado = false
    } else {
        this.ligado = true
    }
}


ventilador1.ligaDesliga()
console.log(ventilador1.ligado)
ventilador1.ligaDesliga()
console.log(ventilador1.ligado)

console.log(ventilador1)


// Acessando propriedades

// Para acessar propriedades, como já foi visto, usamos o "."
// console.log(ventilador1.velocidadeMaxima); // Retorna 3




// Diferente de outras línguagens orientadas a objetos, podemos adicionar propriedades e métodos em tempo de execução.