let num = document.getElementById('txtn')
let tab = document.getElementById('seltab')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) >= 100) {
        return true
    } else {
        return false
    }
}

