//Crea una funzione chiamata sommaNumeri che prenda un array di N numeri e 
//calcoli la somma di tutti questi numeri contenuti nell'array, restituendolo come risultato.

let numberofelements= parseInt(prompt("quanti numeri vuoi inserire?"));
let miaSomma = sommaNumeri(numberofelements);
console.log(miaSomma);

function sommaNumeri(numberofelements) { 
    
    let arrayofnumbers=[] ;
    let somma = 0;

    for (let i=0; i<numberofelements; i++ ) {
        let numero = parseInt(prompt("inserisci un numero"));
        arrayofnumbers.push(numero); 
        somma = somma + numero;
    }
    return somma;
}


//Utilizzare la funzione sommaNumeri per stampare il risultato. L'array di N numeri da passare alla funzione lo create chiedendo all'utente quanti numeri vuole inserire (cioè N),
// e poi facendogli inserire questi N numeri all'utente stesso tramite apposito prompt().




//Crea una funzione chiamata mediaAritmetica che prende in input un array di N numeri e restituisca la media aritmetica dei numeri contenuti nell'array.
//Utilizzare la funzione sommaNumeri precedentemente creata per calcolare la media dei numeri che vanno chiesti all'utente attraverso dei prompt.
//Potete ad esempio provare ad usare questo programma per inserire N voti di scuola e farvi restituire qual è la media di tutti i voti inseriti!

//let numberofelementi= parseInt(prompt("quanti numeri vuoi inserire?"));
let miasomma = sommaNumeri(numberofelementi);
console.log (miaSomma);

function sommaNumeri(numberofelementi) {

    let arrayofnumbers=[];
    let somma= 0

    for (let i=0; i<numberofelementi; i++ ) {
        let numero = parseInt(prompt("inserisci un numero"));
        arrayofnumbers.push (numero)
        somma = somma + numero;
        media = somma % numberofelementi;
    }
    return media;
    }
}