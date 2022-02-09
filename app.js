const numbers = document.getElementsByClassName('btn');
const result = document.getElementsById("result");

for (let number of numbers) {
    number.addEventListener('click', function () {
        result.innerHTML += this.value
    });
}

function equal() {
    let res = result.innerHTML
    let output = eval(res)
    result.innerHTML = output
}

function clean() {
    result.innerHTML = " "
}

function undo() {
    let res = result.innerHTML
    result.innerHTML = res.substring(0, res.length - 1);
}
// Dark & light Mode
let  checkbox = document.querySelector('input[name-theme]');
checkbox.addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})