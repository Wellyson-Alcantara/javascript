let lista = document.querySelector('.saida ul')
let envio = document.querySelector('.envio')

let saudaçoes = [
    'Feliz Aniversário!',
    'Feliz Natal',
    'Feliz Pascoa',
    'Feliz Natal para toda a familia',
    'Feliz Natal meu amor'
]

let reinicio

function clicar() {
    lista.innerHTML = ''

    for (let i = 0; i < saudaçoes.length; i++) {
        let input = saudaçoes[i];
        if (input.includes('Natal')) {
            let listaItem = document.createElement('li');
            listaItem.textContent = input;
            lista.appendChild(listaItem);
        }
    }
}

envio.addEventListener('click', clicar);