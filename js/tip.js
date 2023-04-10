//* calculator__options
const calculator = document.querySelector('.calculator__options');
const bill = calculator.querySelector('#bill-amount');
const tipOptions = calculator.querySelectorAll('.tip__option-line button');
const customInput = calculator.querySelector('#custom-tip');
const people = calculator.querySelector('#people');

console.log(calculator, bill, tipOptions, customInput, people);
//* calculator__options
const renderer = document.querySelector('.calculator__renderer');
let tipAmount = renderer.getElementsByClassName('tip-amount')[0];
let costPerPerson = renderer.getElementsByClassName('total')[0]; // previously named "totalCost"
//! getElementsByClassName returns an HTMLCollection so an array, will need index to read value even if it's unique.

console.log(renderer, tipAmount, costPerPerson);

const tipOptionHandler = (event) => {
    if (bill.value !== null || bill.value !== 'undefined') {
        console.log(bill.value);
        //tipOptions[4].textContent[tipOptions[4].textContent.length - 1] //* prints "%"
        //event.target.textContent[event.target.textContent.length - 1] = "";
        //let rate = Number(event.target.textContent - event.target.textContent[event.target.textContent.length - 1]);
        let rate = event.target.textContent;
        rate = rate.replace('%', '');
        //rate *= 1;
        //console.log(typeof(rate));
        //rate = Number(event.target);
        //tipAmount[0].textContent = "";
        //tipAmount.textContent = "";
        //let tipResult = tipAmount.textContent
        //tipAmount.textContent = `${ ((customValue *  (bill.value * 1)) / 100) }$`;
        tipAmount.textContent = `${ (((rate * 1) *  (bill.value * 1)) / 100).toFixed(2) }$`;
        //costPerPerson.textContent = ((((rate * 1) *  (bill.value * 1)) / 100) * (people.value * 1)) + (bill.value * 1); // total cost
        //costPerPerson.textContent = (((((rate * 1) *  (bill.value * 1)) / 100) + (bill.value * 1)) / (people.value * 1)); // prints "infinity"
        //costPerPerson.textContent = ((((rate * 1) * (bill.value * 1)) / 100) + (bill.value * 1)) / (people.value * 1);
        //costPerPerson.textContent = ((((rate * 1) * (bill.value * 1)) / 100) * (people.value * 1) + (bill.value * 1)) / (people.value * 1);
        costPerPerson.textContent = (((((rate * 1) * (bill.value * 1)) / 100) * (people.value * 1) + (bill.value * 1)) / (people.value * 1)).toFixed(2);
        console.log(((((rate * 1) *  (bill.value * 1)) / 100) * (people.value * 1)) + (bill.value * 1));
        //tipAmount.textContent = `${rate *  bill}$`;
    }  else {
        alert("Please enter a bill value")
    }
}

const customTipHandler = (event) => {
    console.log('customTipHandler');
    console.log(event);
    console.log(event.target);
    console.log(event.srcElement);
    //console.log(event.target.style);
    console.log(event.target.style.display); // prints 'initial'
    console.log(event.srcElement.style.display);  // prints 'initial'
    //event.target.style.display = 'none'
    tipOptions[5].style.display = 'none'
    //event.srcElement.style.display = 'none'
    customInput.style.display = 'initial'
}

//customTipHandler(tipOptions[5])

for (const tipOption of tipOptions) {
    if (tipOption.textContent === 'Custom') {
        tipOption.addEventListener("click", customTipHandler)
        customInput.addEventListener("input", (event)=> {
            if (bill.value !== null || bill.value !== 'undefined') {
                const customValue = event.target.value * 1;
                tipAmount.textContent = `${ ((customValue *  (bill.value * 1)) / 100).toFixed(2) }$`;
                //costPerPerson.textContent = (((customValue *  (bill.value * 1)) / 100) * (people.value * 1)) + (bill.value * 1);  // total cost
                //costPerPerson.textContent = (((((rate * 1) *  (bill.value * 1)) / 100) + (bill.value * 1)) / (people.value * 1));
                //costPerPerson.textContent = ((((rate * 1) * (bill.value * 1)) / 100) + (bill.value * 1)) / (people.value * 1);
                costPerPerson.textContent = ((((customValue * (bill.value * 1)) / 100) * (people.value * 1) + (bill.value * 1)) / (people.value * 1)).toFixed(2);
            } else {
                alert("Please enter a bill value")
            }
        })
    } else {
        tipOption.addEventListener("click", tipOptionHandler)
    }
}

/* //! que le renderer se mette à jour lors des saisies bill ou people par rapport au dernier rate sélectionné
!nécésscite de déclarer rate dans le scope global, et que chaque click enregistre une nouvelle valeur pour rate
! qui sera appelée par inputHandler si elle existe afin que le calcul se fasse automatiquement
const inputs = [bill, people];
const inputHandler = (event) => {
    switch (event.target.id) {
        case 'bill-amount':
            if (people.value !== 'undefined') {
                tipAmount.textContent = `${ (((rate * 1) *  (bill.value * 1)) / 100).toFixed(2) }$`;
                costPerPerson.textContent = (((((rate * 1) * (bill.value * 1)) / 100) * (people.value * 1) + (bill.value * 1)) / (people.value * 1)).toFixed(2);
                console.log(((((rate * 1) *  (bill.value * 1)) / 100) * (people.value * 1)) + (bill.value * 1));
            }
            break;
         
        case 'people':
            if (bill.value !== 'undefined') {
                tipAmount.textContent = `${ (((rate * 1) *  (bill.value * 1)) / 100).toFixed(2) }$`;
                costPerPerson.textContent = (((((rate * 1) * (bill.value * 1)) / 100) * (people.value * 1) + (bill.value * 1)) / (people.value * 1)).toFixed(2);
                console.log(((((rate * 1) *  (bill.value * 1)) / 100) * (people.value * 1)) + (bill.value * 1));
            } 
            break;
            default:
                break;
    }
}

for (const input of inputs) {
    input.addEventListener("input", inputHandler)
}*/
        
/* //! empèche l'exécution de customTipHandle car l'annule automatiquement après, à revoir        
const revertCustomHandler = (event) => {
    if (event.target.id !== 'custom-tip' && customInput.style.display !== 'none' && customInput.value === '' && tipOptions[5].style.display === 'none') {
        customInput.style.display = 'none';
        tipOptions[5].style.display = 'initial'
    }
}

document.addEventListener("click", revertCustomHandler)*/