/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

// inizializzo la costante gridElement
const gridElement = document.querySelector("#grid");

// scrivo il ciclo for per stampare i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    // creo un nuovo elemento "newElement" di classe "square" e lo inserisco all'interno di "gridElement"
    const newElement = document.createElement("div");
    newElement.className = "square" ;
    gridElement.append(newElement);

    // se i non è divisibile ne per 3 ne per 5 lo stampo
    if (i % 3 != 0 && i % 5 != 0) {

        newElement.innerHTML = i;
        newElement.style.backgroundColor = "red";

    // altrimenti controllo se è divisibile solo per 3, solo per 5 o per entrambi
    } else {

        // se è divisibile per 3 ma non per 5 stampo Fizz
        if (i % 3 == 0 && i % 5 != 0) {
            newElement.innerHTML = "Fizz";
            newElement.style.backgroundColor = "green";
        } 
        
        // se è divisibile per 5 ma non per 3 stampo Buzz
        if (i % 5 == 0 && i % 3 != 0) {
            newElement.innerHTML = "Buzz";
            newElement.style.backgroundColor = "blue";
        }
        
        // se è divisibile sia per 5 che per 3 stampo FizzBuzz
        if (i % 3 == 0 && i % 5 == 0) {
            newElement.innerHTML = "Fizz Buzz";
            newElement.style.backgroundColor = "purple";
        }
    }
    
}