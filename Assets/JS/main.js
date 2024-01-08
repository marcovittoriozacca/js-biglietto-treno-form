const kmXhourPrice = 0.21;
let price;
//Campi di input
const nomePsg = document.getElementById('name');
const kmDaPercorrere = document.getElementById('km');
const etaPsg = document.getElementById('eta');

//campi del biglietto generato
const nomePsgBiglietto = document.getElementById('nomeBiglietto');
const offertaBiglietto = document.getElementById('offerta');
const costoBigliettoHTML = document.getElementById('costoBiglietto');
const carrozzaHTML = document.getElementById('carrozza');
const codiceCPHTML = document.getElementById('codiceCP');
const myTicketHTML = document.getElementById('myTicket');


//Bottoni
const generaBigliettoHTML = document.getElementById('generaBiglietto');
const formattaFormHTML = document.getElementById('formattaForm');

// funzione che genera il biglietto al click del bottone
generaBigliettoHTML.addEventListener("click", function(){

    // il biglietto viene visualizzato a schermo
    myTicketHTML.className = 'd-block'

    // viene visualizzato il nome del passeggero inserito in input
    nomePsgBiglietto.innerHTML = nomePsg.value.toUpperCase();

    //calcolo del prezzo in base ai km da percorrere
    price = kmDaPercorrere.value * kmXhourPrice;

    // controllo per eventuali sconti
    if(etaPsg.value == "minorenne"){
        price = price - ( price * 0.2 );
        offertaBiglietto.innerHTML = 'Sconto del 20%'
        
    }else if (etaPsg.value == "over65"){
        price = price - ( price * 0.4 );
        offertaBiglietto.innerHTML = 'Sconto del 40%'

    } else {
        offertaBiglietto.innerHTML = 'Biglietto Standard'
    }
    // in output il costo del biglietto, la carrozza (random ) e il codice CP ( random )
    costoBigliettoHTML.innerHTML = `${price.toFixed(2)}€`;
    carrozzaHTML.innerHTML =  randomNumGen(1, 10);
    codiceCPHTML.innerHTML =  randomNumGen(1000, 9999);
})

//funzione che genera numeri randomicamente in base a un min o max a piacere
function randomNumGen(min, max){
    return Math.floor (Math.random()*(max-min + 1)+min)
}

// bottone che resetta tutto
formattaFormHTML.addEventListener("click", function(){
    nomePsg.value = null;
    kmDaPercorrere.value = null;
    etaPsg.value = "minorenne";
    myTicketHTML.className = 'd-none'
})
