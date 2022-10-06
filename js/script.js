// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.


// 1. Chiedere numero di km e Chiedere età

// 2. Prezzo del biglietto --> nº km * 0.21

// 3. SE età < 18 allora sconto 20% all biglietto
//    SE età > 65 allora sconto 40% all biglietto

// 4. Mettere la cifra con due decimali 



//CODICE -------------------------------------

//Dati
let km = parseInt(prompt("Quanti kilometri vuoi percorrere?")); 
let age = parseInt(prompt("Quanti anni hai?"));

console.log(km, age);

document.getElementById("kmuser").innerHTML = km;
document.getElementById("ageuser").innerHTML = age;

//Prezzo iniziale 
let price = km * 0.21;
console.log(price);

document.getElementById("firstprice").innerHTML = price + " €";

//Sconti 
let sconto = ""
if (age < 18) {
    sconto = "20%";
    price = price * 0.8;
} else if (age > 65) {
    sconto = "40%";
    price = price * 0.6;
} else {
    sconto = "0%"
    priceWithDiscount = price
}

document.getElementById("discountuser").innerHTML = sconto;
document.getElementById("finalprice").innerHTML = price + " €";



