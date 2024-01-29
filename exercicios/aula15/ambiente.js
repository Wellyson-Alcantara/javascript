let num = [5, 8, 2, 9, 3]
num.push(1) // adiciona algo no Arrey na ultima posição. obs: acrescenta, não subistitui.
num.sort() // aloco os numeros em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}