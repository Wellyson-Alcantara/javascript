/*
    ## IMPORTANTE ##
    Você tem todo o direito de usar esse material 
    para seu próprio aprendizado. Professores também 
    podem ter acesso a todo o conteúdo e usá-los com 
    seus alunos. Porém todos os que usarem esse 
    material - seja para qual for a finalidade - deverão 
    manter a referência ao material original, disponível 
    em https://github.com/gustavoguanabara/javascript. Este 
    material não poderá ser utilizado em nenhuma hipótese 
    para ser replicada - integral ou parcialmente - 
    por autores/editoras/instituições para criar livros 
    ou apostilas, com finalidades de obter ganho financeiro 
    com ele.
*/

function estação() { // Sim, é possivel usar acentuação
    let mes = window.prompt('Qual é o mês?')
    let saida = document.getElementById('saida')
    let estação

    if (!mes) {
        alert('Por favor, insira um valor para o mês.')
        return
    }

    let numeroMes = parseInt(mes)

    if (!isNaN(numeroMes) && numeroMes >= 1 && numeroMes <= 12) {
        mes = numeroMes
    } else {
        switch (mes.toUpperCase()) { // O metodo 'toUpperCase()' transforma todas os caracteres de uma string para maiúsculas de acordo com as regras de maiúsculas do Unicode. O metodo 'toLocaleUpperCase()' também converte os caracteres de uma string para maiúsculas, mas leva em consideração as configurações regionais (locale) do usuário.
            case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
                estação = 'INVERNO'
                break; // Nunca se esqueça do Break!!!
            case 'ABRIL': case 'MAIO': case 'JUNHO':
                estação = 'PRIMAVERA'
                break
            case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
                estação = 'OUTONO'
                break
            case 'OUTUBRO': case 'NOVEMBRO': case 'DESEMBRO':
                estação = 'VERÃO'
                break
            default:
                estação = 'INDEFINIDA'
                break;
        }

        if (estação) {
            saida.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estação}</strong></mark>.</p>`;
        } else {
            alert('Por favor, insira um valor válido para o mês (1 a 12 ou nome do mês).');
        }

        return;
    }
    
    switch (mes) { 
        case 1: case 2: case 3:
            estação = 'INVERNO'
            break; // Nunca se esqueça do Break!!!
        case 4: case 5: case 6:
            estação = 'PRIMAVERA'
            break
        case 7: case 8: case 9:
            estação = 'OUTONO'
            break
        case 10: case 11: case 12:
            estação = 'VERÃO'
            break
        default:
            estação = 'INDEFINIDA'
            break;
    }
    saida.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estação}</strong></mark>.</p>`
}