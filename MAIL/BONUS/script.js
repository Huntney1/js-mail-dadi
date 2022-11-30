// .Descrizione dello svolgimento delle operazioni da applicare:
// 1. Chiedere all'utente la sua mail,
// 2. fare un controllo della lista di chi può accedere
//     2.1 Se la mail è presente nella lista
//         2.1.0 stampa: la mail è corretta
//     2.2 Se la mail non è presente nella lista
//         2.2.0 stampa: la mail non è inclusa nella lista


const mail_list = ['pippo@topolinia.com', 'topolino@topolinia.com', 'paperino@topolinia.com', 'archimede@topolinia.com'];

let search_mail = document.getElementById('Inserisci la tua mail');

let button = document.getElementById('bottone');
button.addEventListener(`clik`, function () {

    let ins_mail = document.getElementById("ins_mail").value;
    console.log(ins_mail);

    let control = false;

    for (let i = 0; i < mail_list.length; i++) {

        if (mail_list[i] === search_mail) {
            control = true;
        }
    }

    if (control) {
        document.getElementById('chiamata').innerHTML = 'Accesso Effetuato';
    
    }
    else {
        document.getElementById('chiamata').innerHTML = 'Mail Errata';
        
    }
})
