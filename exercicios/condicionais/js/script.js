function verificarPais() {
    var pais = document.querySelector('#txtpais');
    var verificando = document.querySelector('#nacionalidade');
    var nomeDoPais = pais.value;
    verificando.innerHTML = `<p>Seu país é o <strong>${nomeDoPais}</strong></p>`;
    if(nomeDoPais == 'Brasil') {
        verificando.innerHTML += `<p>Você é <strong>brasileiro(a)</strong></p>`
    }
    
}