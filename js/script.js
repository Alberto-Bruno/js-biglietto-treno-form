console.log('JS OK')

/*
-- Il programma dovrà chiedere all'utente il numero di km che vuole percorrere e l'età del passeggero.
1- Il prezzo del biglietto è definito in base ai km (0.21 € al km)
2- Va applicato uno sconto del 20% per i minonenni
3- Va applicato una sconto del 40% per gli over 65
4- L'output del prezzo finale va messo fuori in forma umana
*/


// 1- Prendo gli elementi dalla pagina
// 2- Aggancio l'event listner al button

//Dentro l'event listner (quando l'utente clicca)

// 1- Recupero i volori dal form
// TODO #2 Validazione
// 3- Calcolo del prezzo in base ai kms
// 4- Verifico sconto (e lo applico)
// 5- Arrotondo a 2 decimali (formatto il prezzo)
// 6- Svuoto i campi
// 7- Riempio tutti i campi con i valori corretti
// 8- Mostro il biglietto (rimuovo il display none)

// *--------------------------------------------------

// Elements
const nameField = document.getElementById('name');
const kmsField = document.getElementById('kms');
const ageField = document.getElementById('age');
const confirmButton = document.getElementById('button-confirm');
const resetButton = document.getElementById('button-reset');

// tickets element

const ticketSection = document.getElementById('ticket-section');
const passengerName = document.getElementById('passenger-name');
const rate = document.getElementById('rate');
const coach = document.getElementById('coach');
const pnr = document.getElementById('pnr');
const price = document.getElementById('price');



// Problemi
if (isNaN (kms) || isNaN(age) || kms <= 0 || age <= 0) {
    document.getElementById('alert').innerText = 'Caratteri non validi';
} else {

}

