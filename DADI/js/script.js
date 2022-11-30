// .Descrizione dello svolgimento delle operazioni da applicare:

// 1. - Generare un numero casuale per il giocatore;
// 2. - Generare un numero casuale per il computer;
// 3. - Controllare il valore piu' alto:
//     3.1 SE il giocatore ha il dado con il punteggio piu' alto , mostrare il messaggio "Il giocatore ha vinto"
//     3.2 SE il computer ha il dado con il punteggio piu' alto , mostrare il messaggio "Il computer ha vinto"
//     3.3 ALTRIMENTI  sia tu che il computer hanno lo stesso punteggio, mostra il messaggio "avete pareggiato"

num_player = Math.floor( Math.random() * 6) + 1;
num_computer = Math.floor( Math.random() * 6) + 1;

 console.log(`il numero del giocatore è: ${num_player}`);
 console.log(`il numero del computer è: ${num_computer}`);

if(num_player == num_computer){
    console.log('pareggio')
}
else if (num_computer > num_player){
    console.log('il computer ha vinto');
}
else{
    console.log('il giocatore ha vinto');
}