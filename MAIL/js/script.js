// .Descrizione dello svolgimento delle operazioni da applicare:
// 1. Chiedere all'utente la sua mail,
// 2. fare un controllo della lista di chi può accedere
//     2.1 Se la mail è presente nella lista
//         2.1.0 stampa: la mail è corretta
//     2.2 Se la mail non è presente nella lista
//         2.2.0 stampa: la mail non è inclusa nella lista


const mail_list = ['pippo@gmail.com', 'topolino@gmail.com', 'paperino@gmail.com', 'archimede@gmail.com'];

let search_mail = prompt('Inserisci la tua mail');

let control = false;

for(let i = 0; i < mail_list.length; i++){

    if (mail_list[i] == search_mail){
        control = true;
    }
}

