function contar() {
    let ini = window.document.querySelector('input#txtini')
    let fim = window.document.querySelector('input#txtfim')
    let passo = window.document.querySelector('input#txtpas')
    let res = window.document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERR0] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f){
            for(let c = 1; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F499}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}