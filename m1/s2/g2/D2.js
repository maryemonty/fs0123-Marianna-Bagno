/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
  -string: è un dato di tipo string, ovvero sottoforma di testo/parola e si racchiude nelle virgolette;

  -number: è un dato di tipo numerico e non ha bisogno delle virgolette per essere definito;

  -boolean: può assumere due valori: true (vero), false (falso);

  -undefined: è il dato di una variabile dichiarata ma alla quale non è stato assegnato nessun valore;

  -null: è un valore che rende la variabile dichiarata nulla
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* {let name = "Marianna"}; */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* 
  let numero1 = 12;
  let numero2 = 20;
  let somma = numero1 + numero2;
  console.log(somma)

  secondo metodo
  
  console.log(12+20);

  terzo metodo

  let somma = 12+30;
  console.log(somma);

  quarto metodo

  console.log(`${somma}`)
  */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12; */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* 
  {let name = "Bagno"};

  const NAME = "Marianna"
  NAME = "Mario Rossi"
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* 
  let x = 12;
  console.log(x - 4);

  oppure

  let y = 4;
  console.log(x - y);
*/

/* ESERCIZIO 7
Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* 
  let name1 = "john"
  let name2 = "John"

  console.log(name1 == name2); false

  EXTRA 

  let name3 = name2.toLowerCase();

  console.log(name1 == name3); true

*/
