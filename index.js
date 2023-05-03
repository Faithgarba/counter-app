// document.getElementById("count-el").innerText=10;

let countEl = document.getElementById("count-el")
console.log(countEl)

let saveEl = document.getElementById("save-el")
console.log(saveEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function decrement() {
    count = count - 1
    countEl.innerText = count
}

function save(){
    let countStr = count + "-"

    saveEl.textContent += countStr;

    countEl.textContent =0
    count = 0
    return count;
}