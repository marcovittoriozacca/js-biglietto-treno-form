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

generaBigliettoHTML.addEventListener("click", function(){

    myTicketHTML.className = 'd-block'

    nomePsgBiglietto.innerHTML = nomePsg.value.toUpperCase();
    price = kmDaPercorrere.value * kmXhourPrice;

    if(etaPsg.value == "minorenne"){
        price = price - ( price * 0.2 );
        offertaBiglietto.innerHTML = 'Sconto del 20%'
        costoBigliettoHTML.innerHTML = `${price.toFixed(2)}€`;
        carrozzaHTML.innerHTML =  randomNumGen(1, 10);
        codiceCPHTML.innerHTML =  randomNumGen(1000, 9000);
        

    }else if (etaPsg.value == "over65"){
        price = price - ( price * 0.4 );
        offertaBiglietto.innerHTML = 'Sconto del 40%'
        costoBigliettoHTML.innerHTML = `${price.toFixed(2)}€`;
        carrozzaHTML.innerHTML =  randomNumGen(1, 10);
        codiceCPHTML.innerHTML =  randomNumGen(1000, 9000);
    } else {
        offertaBiglietto.innerHTML = 'Biglietto Standard'
        costoBigliettoHTML.innerHTML = `${price.toFixed(2)}€`;
        carrozzaHTML.innerHTML =  randomNumGen(1, 10);
        codiceCPHTML.innerHTML =  randomNumGen(1000, 9000);
    }
})

function randomNumGen(min, max){
    return Math.floor (Math.random()*(max-min + 1)+min)
}

formattaFormHTML.addEventListener("click", function(){
    nomePsg.value = null;
    kmDaPercorrere.value = null;
    etaPsg.value = "minorenne";
})
