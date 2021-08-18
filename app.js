let validation = document.querySelectorAll('.validation');
let radio = document.querySelectorAll('.radio');
let custom = document.querySelector('#custom');
let billamount = document.querySelector('#bill');
let resetBtn = document.querySelector('.reset-btn');
let num = 0;
let finalAmount = 0;
let alpha = document.querySelector('.alpha');
let printTip = document.querySelector('.tip-value');
let printAmount = document.querySelector('.total-value');
let caution = document.querySelector('.alert');
let customTip = document.querySelector('.custom-tip');
let tipPercents = [5, 10, 15, 25, 50];

let peopleCount = document.querySelector('#people');

//billAmount validation and calculation
billamount.addEventListener('input', () => {
    let billAmount = document.getElementById('bill').value;
    if (isNaN(billAmount)) {

        alpha.classList.remove('none');
        billamount.classList.add('red');
    } else {
        alpha.classList.add('none');
        billamount.classList.remove('red');



    }
})
billamount.onchange = calculate;

for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener('click', () => {
        return num = tipPercents[i];
    });
}
for (let i = 0; i < radio.length; i++) {
    radio[i].onchange = calculate;
}

//when one percent is already selected and custom is focused then remove the selected percent

custom.addEventListener('focus', () => {

    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            radio[i].checked = false;
        }
    }
});

custom.addEventListener('change', () => {
    let customValue = document.querySelector('#custom').value;
    if (isNaN(customValue)) {

        customTip.classList.remove('none');
        custom.classList.add('red');
    } else {
        customTip.classList.add('none');
        custom.classList.remove('red');
        num = Number(custom.value);
        calculate();

    }
});

peopleCount.addEventListener('change', () => {
    let count = document.querySelector('#people').value;
    if (count == 0 || isNaN(count)) {
        caution.classList.remove('none');
        peopleCount.classList.add('red');
        printTip.innerHTML = `$ 0.00`;
        printAmount.innerHTML = `$ 0.00`;

    } else {
        peopleCount.classList.remove('red');
        caution.classList.add('none');
        calculate();
    }
});


//validation of numerical keys only in input on keyboard
function validator(e) {
    let keywordCode = e.keyCode ? e.keyCode : e.which;
    if (keywordCode <= 45 || keywordCode >= 58) {
        e.preventDefault();

    }

}

for (let i = 0; i < validation.length; i++) {
    validation[i].addEventListener('keypress', validator);
}



function calculate() {
    let billAmount = Number(document.getElementById('bill').value);
    let percents = Number(num);
    let peopleCout = Number(document.getElementById('people').value);

    let tip = (Math.round((billAmount * (percents / 100)) / peopleCout * 100) / 100);
    let totalAmount = (billAmount / peopleCout) + tip;
    finalAmount = Math.round(totalAmount * 100) / 100;

    printTip.innerHTML = "$" + " " + tip;
    printAmount.innerHTML = "$" + " " + finalAmount;
}

resetBtn.addEventListener('click', reset);

function reset() {
    billamount.value = "";
    peopleCount.value = "1";

    printTip.innerHTML = `$ 0.00`;
    printAmount.innerHTML = `$ 0.00`;
    custom.value = null;
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            radio[i].checked = false;

        }
    }

}