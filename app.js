let validation = document.querySelectorAll('.validation');
let radio = document.querySelectorAll('.radio');
let custom = document.querySelector('#custom');
let billamount = document.querySelector('#bill');
let resetBtn = document.querySelector('.reset-btn');
let num = 0;
let finalAmount = 0;

let printTip = document.querySelector('.tip-value');
let printAmount = document.querySelector('.total-value');
let caution = document.querySelector('.alert');

let tipPercents = [5, 10, 15, 25, 50];

let peopleCount = document.querySelector('#people');

peopleCount.addEventListener('change', () => {
    let count = document.querySelector('#people').value;
    if (count == 0) {
        caution.classList.remove('none');
        printTip.innerHTML = `$ 0.00`;
        printAmount.innerHTML = `$ 0.00`;

    } else {
        caution.classList.add('none');
        calculate();
    }
})

for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener('click', () => {
        return num = tipPercents[i];
    });
}

//when one percent is already selected and custom is focused then remove the selected percent

custom.addEventListener('input', () => {
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            radio[i].checked = false;
            num = Number(custom.value);
            calculate();
        } else {
            num = Number(custom.value);
            calculate();
        }
    }
});

//validation of numerical keys only in input
function validator(e) {
    let keywordCode = e.keyCode ? e.keyCode : e.which;
    if (keywordCode <= 45 || keywordCode >= 57) {
        e.preventDefault();

    }

}
// for (let i = 0; i < validation.length; i++) {
//     validation[i].addEventListener('keypress', validator);
// }

for (let i = 0; i < validation.length; i++) {
    validation[i].addEventListener('keydown', validator);
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



billamount.onchange = calculate;
for (let i = 0; i < radio.length; i++) {
    radio[i].onchange = calculate;
}

resetBtn.addEventListener('click', reset);

function reset() {
    billamount.value = 0;
    peopleCount.value = 1;

    printTip.innerHTML = `$ 0.00`;
    printAmount.innerHTML = `$ 0.00`;
    custom.value = null;
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            radio[i].checked = false;

        }
    }

}