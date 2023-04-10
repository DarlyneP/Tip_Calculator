//* calculator__options
const calculator = document.querySelector('.calculator__options');
const bill = calculator.querySelector('#bill-amount');
const tipOptions = calculator.querySelectorAll('.tip__option-line button');
const customInput = calculator.querySelector('#custom-tip');
const people = calculator.querySelector('#people');

console.log(calculator, bill, tipOptions, customInput, people);

//* calculator__renderer
const renderer = document.querySelector('.calculator__renderer');
let tipAmount = renderer.getElementsByClassName('tip-amount')[0];
let costPerPerson = renderer.getElementsByClassName('total')[0]; // previously named "totalCost"
//! getElementsByClassName returns an HTMLCollection so an array, will need index to read value even if it's unique.
const reset = renderer.querySelector('.reset');

console.log(renderer, tipAmount, costPerPerson, reset);

//* Handlers
//& Tip selection
const tipOptionHandler = (event) => {
    if (bill.value !== null || bill.value !== 'undefined') {
        console.log(bill.value);
        let rate = event.target.textContent;
        rate = rate.replace('%', '');
        tipAmount.textContent = `${ (((rate * 1) *  (bill.value * 1)) / 100).toFixed(2) }$`;
        costPerPerson.textContent = (((((rate * 1) * (bill.value * 1)) / 100) * (people.value * 1) + (bill.value * 1)) / (people.value * 1)).toFixed(2);
        console.log(((((rate * 1) *  (bill.value * 1)) / 100) * (people.value * 1)) + (bill.value * 1));
    }  else {
        alert("Please enter a bill value")
    }
}

const customTipHandler = (event) => {
    console.log('customTipHandler');
    console.log(event);
    console.log(event.target);
    console.log(event.srcElement);
    console.log(event.target.style.display); // prints 'initial'
    console.log(event.srcElement.style.display);  // prints 'initial'
    tipOptions[5].style.display = 'none'
    customInput.style.display = 'initial'
}

for (const tipOption of tipOptions) {
    if (tipOption.textContent === 'Custom') {
        tipOption.addEventListener("click", customTipHandler)
        customInput.addEventListener("input", (event)=> {
            if (bill.value !== null || bill.value !== 'undefined') {
                const customValue = event.target.value * 1;
                tipAmount.textContent = `${ ((customValue *  (bill.value * 1)) / 100).toFixed(2) }$`;
                costPerPerson.textContent = ((((customValue * (bill.value * 1)) / 100) * (people.value * 1) + (bill.value * 1)) / (people.value * 1)).toFixed(2);
            } else {
                alert("Please enter a bill value")
            }
        })
    } else {
        tipOption.addEventListener("click", tipOptionHandler)
    }
}

//& Reset calculator
const resetHandler = () => {
    tipAmount.textContent = '0.00$';
    costPerPerson.textContent = '0.00$';
}

reset.addEventListener("click", resetHandler);