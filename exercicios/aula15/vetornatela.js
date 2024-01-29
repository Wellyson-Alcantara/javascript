let valores = [8, 1, 7, 4, 2, 9]
valores.sort() // serve para colocar os numeros e ordem.
// console.log(valores)

/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores) { // Está é uma maneira mais recente da ECMA'Script para  fazer um (For) mais simplificado! Obs: Ele é feito exclusivamente para Arreis e objetos.
    console.log(`A posição ${pos} tem  o valor ${valores[pos]}`)
}