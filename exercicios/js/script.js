function dividir() {
    var n1 = document.querySelector('#txtn1');
    var n2 = document.querySelector('#txtn2');
    var res = document.querySelector('#resultado');
    var conv1 = Number(n1.value);
    var conv2 = Number(n2.value);
    var dividir = conv1 / conv2;
    res.innerHTML = dividir.toFixed(2).replace('.', ',');
}