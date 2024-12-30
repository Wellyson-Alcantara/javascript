function fatorial() {
    let num = document.querySelector('input#fnum')
    let res = document.querySelector('div#res')
    if (num.value.length == 0 || num.value < 1 || num.value > 21){
        alert('Digite um número válido!')
    } else {
        let n = Number(num.value)
        let c = n
        let fat = 1
        res.innerHTML += `<h2><strong>Calculando ${n}!</strong></h2>`
        while(c > 1) {
            res.innerHTML += `${c} x `
            fat *= c
            c--
        }
        res.innerHTML += `1  = <strong>${fat.toLocaleString('pt-BR')}</strong>`
    }
}