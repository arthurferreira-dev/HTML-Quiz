let link = document.getElementById('linkado');
let paragrafo = document.getElementById('res');
let verify;
import { acertos, erros } from "./import.js";


function certo() {
    acertos += 1;
    verify = 1;
    Verificador();
}

function errado() {
    erros += 1;
    verify = 0;
    Verificador();
}

function Verificador() {
    if (verify == 0) {
        paragrafo.innerHTML = 'Você errou!';
    } else if (verify == 1) {
        paragrafo.innerHTML = 'Parábens era Tim Berners-Lee mesmo!';
    }
}