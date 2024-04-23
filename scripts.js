function teste() {
    let numero = window.prompt(`Digite um número para testaar se é par ou ímpar...`)
    parimp = numero % 2;

    resposta = document.getElementById('resultado');
    if (parimp == 0) {
        resposta.innerHTML = `<p>O número <strong>${numero}</strong> é <strong>PAR</strong>.</p>`;
    } else {
        resposta.innerHTML = `<p>O núimero <strong>${numero}</strong> é <strong>ÍMPAR</strong></p>`
    }
}
