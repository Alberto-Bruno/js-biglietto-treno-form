console.log('JS OK')

/*
Il programma dovrà chiedere all'utente il numero di km che vuole percorrere e l'età del passeggero.
Il prezzo del biglietto è definito in base ai km (0.21 € al km)
Va applicato uno sconto del 20% per i minonenni
Va applicato una sconto del 40% per gli over 65
L'output del prezzo finale va messo fuori in forma umana
*/


// 1- Prendo gli elementi dalla pagina
// 2- Aggancio l'event listner al button

//Dentro l'event listner (quando l'utente clicca)

// 1- Recupero i volori dal form
// 2- Validazione
// 3- Calcolo del prezzo in base ai kms
// 4- Verifico sconto (e lo applico)
// 5- Arrotondo a 2 decimali (formatto il prezzo)
// 6- Svuoto i campi
// 7- Riempio tutti i campi con i valori corretti
// 8- Mostro il biglietto (rimuovo il display none)

// *--------------------------------------------------

// Form Elements
const nameField = document.getElementById('name');
const kmsField = document.getElementById('kms');
const ageField = document.getElementById('age');
const confirmButton = document.getElementById('confirm-button');
const resetButton = document.getElementById('reset-button');

// Tickets Element

const ticketSection = document.getElementById('ticket-section');
const passengerNameElement = document.getElementById('passenger-name');
const rateElement = document.getElementById('rate');
const coachElement = document.getElementById('coach');
const pnrElement = document.getElementById('pnr');
const priceElement = document.getElementById('price');


// Event Listner Button
confirmButton.addEventListener('click' , function() {
    // Recupero i valori dal form
    const nameValue = nameField.value.trim();
    const kmsValue = parseInt(kmsField.value.trim());
    const ageValue = ageField.value;

    console.log(nameValue, kmsValue, ageField);

    // Validazione
    if (!nameValue || isNaN(kmsValue) || kmsValue < 10) {
        alert('non hai inserito i valori validi');
        return;
    }

    // Calcolo del prezzo base
    let rateName = 'Tariffa Ordinaria';
    let price = 0.21 * kmsValue;


    // Calcolo sconto
    if (ageValue === 'under') {
        price *= 0.8; // 20%
        rateName = 'Tariffa minore';
    } else if (ageValue === 'over') {
        price *= 0.6; //40%
        rateName = 'Tariffa Over 65';
    }

    console.log(price, rateName);

    // Arrotondiamo il prezzo
    price = '€' + price.toFixed(2);


    // Carrozza e PNR
    const coach = '9';
    const pnr = '94587';

    // Montiamo i dati nel biglietto
    passengerNameElement.innerText = nameValue;
    rateElement.innerText = rateName;
    coachElement.innerText = coach;
    pnrElement.innerText = pnr;
    priceElement.innerText = price;

    // Appare il biglietto
    ticketSection.classList.remove('d-none');
});


