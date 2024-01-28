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

function media() {
    let nom = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nom}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nom}?`))
    med = (n1 + n2) / 2

    let msg
    if (med >= 6) {
        msg = 'Meus parabéns!'
    } else {
        msg = 'Estude um pouco mais!'
    }

    let res = window.document.getElementById('situaçao')
    res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
    res.innerHTML += `<p>Á média final será <mark>${med}</mark>.</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style="color: red;">${msg}</strong></p>`
}