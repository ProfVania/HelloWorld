// Display an alert when the page loads
alert("Hello World");

// Get the element where the name will be displayed
let elemento = document.querySelector("#nomeUsuario");

// Initialize the name variable
let nomeUsuario = "";

// Prompt the user for their name until they provide one or cancel
while (nomeUsuario === "") {
    nomeUsuario = prompt("Qual o seu nome?");
    
    // If the user clicks "Cancel" or enters nothing, prompt again
    if (nomeUsuario === null) {
        elemento.textContent = 'seja muito bem vindo.';
        break; // Exit the loop if the user cancels
    }
}

// Update the element's text content with the user's name if provided
if (nomeUsuario !== null && nomeUsuario !== "") {
    elemento.textContent = nomeUsuario;
}