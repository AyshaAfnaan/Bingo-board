let numberToCall = []
for (let i = 1; i <= 77; i++) {
    numberToCall.push(i);
}

let randomIndex = Math.floor(Math.random() * numberToCall.length)
let randomNumber = numberToCall[randomIndex]

function button2() {
    let randomIndex = Math.floor(Math.random() * numberToCall.length)
    let randomNumber = numberToCall[randomIndex]
    console.log(randomNumber)
    // document.getElementById(randomNumber)?.classList?.add("highlight")
    document.getElementById(randomNumber).style.background = "#" + Math.floor(Math.random() * 16777215).toString(16);
}


function onloadAction() {
    for (let i = 1; i <= 76; i++) {
        let box = document.createElement('div')
        box.classList.add("numbers")
        box.setAttribute("id", i)
        box.innerText = i;
        document.getElementById("container").appendChild(box)
    }

}

onloadAction()

Window.onload = onloadAction
