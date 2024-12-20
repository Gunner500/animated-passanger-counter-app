let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    console.log(count)
    countEl.textContent = count
}

function save() {
    let entries = count + " - "
    saveEl.textContent += entries
    console.log(count)
    countEl.textContent = 0
    count = 0
}
