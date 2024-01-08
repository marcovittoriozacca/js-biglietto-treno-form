const kmXhourPrice = 0.21;
//Campi di input
const nomePsg = document.getElementById('name');
const kmDaPercorrere = document.getElementById('km');
const etaPsg = document.getElementById('eta');
let price;

//Bottoni
const generaBigliettoHTML = document.getElementById('generaBiglietto');
const formattaFormHTML = document.getElementById('formattaForm');

generaBigliettoHTML.addEventListener("click", function(){
    
    price = kmDaPercorrere.value * kmXhourPrice;
    console.log(nomePsg.value);

    if(etaPsg.value == "minorenne"){
        price = price - ( price * 0.2 );
        console.log(`Il prezzo del biglietto è di ${price.toFixed(2)}€. è stato applicato uno sconto del 20%`);
    }else if (etaPsg.value == "over65"){
        price = price - ( price * 0.4 );
        console.log(`Il prezzo del biglietto è di ${price.toFixed(2)}€. è stato applicato uno sconto del 40%`);
    } else {
        console.log(`Il prezzo del biglietto è di ${price.toFixed(2)}€.`);
    }
})
