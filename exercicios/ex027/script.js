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

    function tabuada() {
        let saida = window.document.getElementById('saida')
        let num = Number(document.getElementById('fnum').value)

        saida.innerHTML += `<h2>Tabuada de ${num}</h2>`
        let c = 1
        while (c <= 10) {
            saida.innerHTML += `${num} x ${c} = <strong>${num * c}</strong><br>`
            c++
        }
    }