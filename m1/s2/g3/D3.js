/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


    let numero1 = prompt("inserisci un numero")
    let numero2 = prompt("inserisci un altro numero")

    if(!isNaN(numero1,numero2)){
        if(Number(numero1) > Number(numero2)){
            
            console.log(`${numero1} è maggiore`)
        }
        else if(Number(numero1) == Number(numero2)){

            console.log("sono numeri uguali")
        }
        else if(Number(numero2) > Number(numero1)){
            console.log(`${numero2} è maggiore`)
        }
    }else{
        console.log("inserisci un numero")
    }
 

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


  let numero3 = prompt("inserisci il numero 5")

  if(!isNaN(numero3)){
    if(numero3 != 5){
      console.log("not equal")
    }
  }else{
    console.log("inserisci un numero")
  }



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


  let numero4 = prompt("inserisci un numero divisibile per 5")

  if(!isNaN(numero4)){
      if(numero4 % 5 == 0){
          
          console.log(`${numero4} è divisibile per 5`)
      }
  }
  else{
      console.log("inserisci un numero")
  }



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


  let numero5 = prompt("inserisci un numero")
  let numero6 = prompt("inserisci un numero")

  if(!isNaN(numero5,numero6)){
    if(Number(numero5) == 8 || Number(numero6) == 8){
        
      console.log(`uno dei due numeri è uguale a 8`)
    }
    else if(Number(numero5) + Number(numero6) == 8){
      console.log("la loro addizione è 8")
    }
    else if(Number(numero5) - Number(numero6) == 8){
      console.log("la loro sottrazione è uguale a 8")
    }
  }
  else{
    console.log("inserisci un numero")
  }


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


  let totalShoppingCart = prompt("quanto hai speso?")
  let spedizione = 10

  if(totalShoppingCart > 50){
    console.log(`hai diritto alla spedizione gratuita!, paghi solo ${Number(totalShoppingCart)}`)
  }
  else{
    console.log(`10 euro di spedizione!, Per un totale di ${Number(totalShoppingCart) + Number(spedizione)}`)
  }


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/


  let totalShoppingCart = prompt("Quanto hai speso?");
  let spedizione = 10;

  if (totalShoppingCart > 50){
    console.log(`Hai la spedizione gratuita, l'ammontare è di: ${Number(totalShoppingCart) - Number(totalShoppingCart*0.20)}`);
  } else {
    console.log(`La spedizione costa ${spedizione}, l'ammontare totale è di: ${Number(totalShoppingCart) - Number(totalShoppingCart*0.20) + spedizione}`);
  }


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/



let numeri = [10, 13, 9]
let ordine = numeri.sort(function(a,b){return b - a;})
console.log(ordine)


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let inserisciNumero = prompt("inserisci un numero")

if(!isNaN(inserisciNumero)){
    console.log("è un numero")
}
else{
    console.log("non è un numero")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let pariDispari = promt("scopri se è pari o è dispari")

if(pariDispari % 2 == 0){
  console.log(`${pariDispari} è pari`)
}
else{
  console.log(`${pariDispari} è dispari`)
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = prompt("inserisci un numero")

if (Number(val) < 5) {
    console.log("Meno di 5");
  }
  else if (Number(val) < 10) {
    console.log("Meno di 10");
  }
  else{
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: "Toronto",
}

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: "Toronto",
}

delete me.skills[me.skills.length-1]
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array = [];
let i = 1;

do{
  array.push(i);
  i++;
}while(i <= 10)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

let array = [];
let i = 1;

do{
  array.push(i);
  i++;
}while(i <= 10)

console.log(array);
array[9] = 100
console.log(array);
