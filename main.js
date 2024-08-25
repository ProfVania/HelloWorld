alert ("Hello World");

let nomeUsuario = "";
let elemento = document.querySelector("#nomeUsuario");

while (nomeUsuario == ""){
    nomeUsuario = prompt("Qual o seu nome?");
}

elemento.textContent = nomeUsuario;