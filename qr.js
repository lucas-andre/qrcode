//qr code
let codigoqr = captura('img');
let texto = captura('textarea');
let botao = capturar('button');

botao.addEventListener('click', generate);

function generate() {
    let tamanho = "930x930";
    let textoqr = texto.value;
    let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

    let url = `${baseURL}?data=${textoqr}&size=${tamanho}`;

    codigoqr.src = url;
};

function captura(el) {
    return document.querySelector(el);
};

//button sass animation 
var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function() {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}
