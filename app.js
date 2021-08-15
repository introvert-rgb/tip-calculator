let validation = document.querySelectorAll('.validation');
let radio = document.querySelectorAll('.radio');
let custom = document.querySelector('#custom');

let num = 0;

let tipPercents = [5, 10, 15, 25, 50];
let tipGiven = 0;
let peopleCount = document.querySelector('#people');
let tip = document.querySelector('.tip-value');

for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener('click', () => {
        num = tipPercents[i];
    });
}

//when one percent is already selected and custom is focused then remove the selected percent

custom.addEventListener('focus', () => {
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            radio[i].checked = false;

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
for (let i = 0; i < validation.length; i++) {
    validation[i].addEventListener('keypress', validator);
}
let percent = tipPercents[num];
let printTip = document.getElementsByClassName('tip-value');

function calculate() {
    let billAmount = Number(document.getElementById('bill').value);
    let percents = Number(percent);
    let peopleCout = Number(document.getElementById('people').value);

    let tip = (billAmount * (percent / 100)) / peopleCout;

    printTip.innerHTML = tip;
    console.log(tip);
    console.log(billAmount, percents, peopleCount);

}
peopleCount.oninput = calculate;