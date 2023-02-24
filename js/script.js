/*
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

*/

/*
-chidere quanti km
-chiedere eta utente
-0.21 per km
-sconto eta 
? <18 20% 
°sconto = (costo biglietto - (costo biglietto / 100 *20))
? >65 40%
°sconto = (costo biglietto - (costo biglietto / 100 *40))
?else 
°costo biglietto
-stampa
*/

// dichiaro le variabili
let nameEl = document.getElementById('name');
let distanceKmEl = document.getElementById('distanceKm');
let ageEl = document.getElementById('age');
let submitEl = document.getElementById('submit');
let annullaEl = document.getElementById('annulla');
let tiketEl = document.getElementById('tiket');


// variabili vuote
let costKm ;
let sale;
let message='';

//creo un evento
submitEl.addEventListener('click', function(){

    costKm = distanceKmEl.value * 0.21;

    if(ageEl.value < 18){
        sale = (costKm / 100 * 80).toFixed(2);
        message='sconto del 20 % costo: ' + sale + '€'
    
    }else if(ageEl.value >= 65){
        sale = (costKm / 100 * 60).toFixed(2);
        message='sconto del 40 % costo: ' + sale  + '€'
        
    }else{
       sale=costKm.toFixed(2)
       message='niente sconto ' + sale + '€'

    }
    
    
    tiketEl.innerHTML=(`
    Nome passeggero: ${nameEl.value} <br>
    Tratta da percorrere: ${distanceKmEl.value} km <br>
    Eta del passeggero: ${ageEl.value} anni <br>
    ${message}
    `);

    nameEl.value='';
    distanceKmEl.value='';
    ageEl.value='';
    
    tiketEl.classList.remove('spinner-grow');
});

//creo un evento
annullaEl.addEventListener('click', function(){

    tiketEl.classList.add('spinner-grow');
    tiketEl.innerHTML=(``);
});


