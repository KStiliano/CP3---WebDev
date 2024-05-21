function calculaMedia() {
    let nome = window.prompt("Qual é o nome do aluno?");
    let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`));
    let nota2 = Number(window.prompt(`Qual foi a segunda nota de ${nome}?`));
    let media = (nota1 + nota2) / 2;

    let res = document.getElementById("situacao");
    res.innerHTML = `<h2>Analisando a situação de <mark>${nome}</mark>.</h2>`;

    let msg;
    if (media < 3) {
        msg = "REPROVADO";
        res.innerHTML += `<p>Com as notas <mark>${nota1}</mark> e <mark>${nota2}</mark>, a média final será de <mark>${media}</mark>.</p>`;
        res.innerHTML += `<p>O aluno está <span class="reprovado">${msg}</span>.</p>`;
    } else if (media <= 6) {
        msg = "RECUPERAÇÃO";
        res.innerHTML += `<p>Com as notas <mark>${nota1}</mark> e <mark>${nota2}</mark>, a média final será de <mark>${media}</mark>.</p>`;
        res.innerHTML += `<p>O aluno está em <span class="recuperacao">${msg}</span>.</p>`;
    } else {
        msg = "APROVADO";
        res.innerHTML += `<p>Com as notas <mark>${nota1}</mark> e <mark>${nota2}</mark>, a média final será de <mark>${media}</mark>.</p>`;
        res.innerHTML += `<p>O aluno está <span class="aprovado">${msg}</span>.</p>`;
    }
}