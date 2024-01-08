



const resultElement = document.getElementById('main-title');


// Chiedi all'utente il suo nome

const Name = prompt('Come ti chiami?')
console.log(Name)

// Chiedi all'utente il suo cognome

const Surname = prompt('Qual è il tuo cognome?')
console.log(Surname)

// Chiedi il suo colore preferito

const Color = prompt('Qual è il tuo colore preferito')
console.log(Color)

// scrivere sulla pagina nomecognomecolorepreferito23

resultElement.innerHTML = `Il mio nome Cognome e colore preferito è <b>${Name + Surname + Color + 23} <b/> `;

