let num = window.document.getElementById('txtn')
let tab = window.document.getElementById('seltab')

function tabuada() {
    if(num.value.length == 0) {
        window.alert('[ERRO] Você não digitou um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        num.value = '' // Isso é para limpar o númerador
        num.focus() // Isso é feito para que não seje preciso ficar clicando no númerador
        while (c <= 10) {
            let item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}