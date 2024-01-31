/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/


// scrivo il ciclo for per stampare i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    // se i non è divisibile ne per 3 ne per 5 lo stampo
    if (i % 3 != 0 && i % 5 != 0) {
        
    console.log(i)

    // altrimenti controllo se è divisibile solo per 3, solo per 5 o per entrambi
    } else {

        // se è divisibile per 3 ma non per 5 stampo Fizz
        if (i % 3 == 0 && i % 5 != 0) {
            console.log("Fizz")
        } 
        
        // se è divisibile per 5 ma non per 3 stampo Buzz
        if (i % 5 == 0 && i % 3 != 0) {
            console.log("Buzz")
        }
        
        // se è divisibile sia per 5 che per 3 stampo FizzBuzz
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        }
    }
    
}