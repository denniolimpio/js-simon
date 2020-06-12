// Testo esercizio
// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

$(document).ready(


  function(){


    // dichiaro la variabile numeriRandom
    var numeriRandom = [];


    // genero 5 numeri causali ( range 0 - 100)
    for( var i = 0; i <= 4; i++) {
      numeriRandom[i] = Math.floor( Math.random() * 100 );
    }

    // mostro un alert con  i 5 numeri casuali appena generati.
    alert(" ricorda questi numeri: " + numeriRandom);
    console.log(numeriRandom);



    // funzione asincrona
    setTimeout( function (){

      // dichiaro la variabile numeroUtenteArray
      var numeroUtenteArray = [];

      // con un ciclo "for" chiedo all'utente di inserire 5 numeri (uno per volta)

      for ( var i = 0; i < 5; i++)  {

        var numeroUtente = parseInt( (prompt( "Inserisci il numero")));

        // validazione
        while( (numeroUtente === null ) || isNaN(numeroUtente)) {

          numeroUtente = parseInt( (prompt( "Errore Inserisci correttamente il numero")));
        }

        // aggiungo ciascun numero inserito dall'utente in un array che chiamo numeroUtenteArray

        numeroUtenteArray.push(numeroUtente);

        // confronto la corrispondenza tra i numeri inseriti dall'utente e quelli presenti nell'numeroUtenteArray

        for ( var j = 0; j < numeriRandom.length; j++) {

          //condizione: se il numero inserito dall'utente  è uguale ad un numero presente in numeriRandom,
          // stampo -> numero corretto
          // altrimenti stampo " peccato (..)"
          
          if( numeroUtente === numeriRandom[j]) {

            console.log('il numero: ' + numeroUtenteArray[i] + " è corretto")


          } else if( numeroUtente != numeriRandom[i]) {

            console.log('peccato! ' + numeroUtenteArray[i] + " non è corretto")
          }
        }

      }

    }, 2000); // debug impostare 30000





  });
