// .Descrizione dello svolgimento delle operazioni da applicare:

// Lista mail registrate
const mail_list = ['pippo@topolinia.com', 'topolino@topolinia.com', 'paperino@topolinia.com', 'archimede@topolinia.com'];

// Collegare il bottone
let button = document.getElementById('bottone');

// Bottone per importare la mail al click
button.addEventListener(`click`, function () {

    // Recuperare dall'html la richiesta della mail
    search_mail = document.getElementById("ins_mail").value;
    console.log(ins_mail);

    // Effettuare un controllo tramite l'operatore booleano 
    let control = false;

    for (let i = 0; i < mail_list.length; i++) {

        if (mail_list[i] === search_mail) {
            control = true;
        }
    }
    // SE: la mail è nella lista, ALLORA: stamperà 'Accesso Effettuato' 
    if (control) {
        document.getElementById('chiamata').innerHTML = 'Accesso Effettuato';

    }
    // SE: la mail non si trova nella lista, ALLORA: stamperà 'Mail Errata' 
    else {
        document.getElementById('chiamata').innerHTML = 'Mail Errata';

    }
});
