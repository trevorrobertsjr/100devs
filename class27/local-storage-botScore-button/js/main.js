//Create a button that adds 1 to a botScore stored in localStorage 

document.querySelector("button").addEventListener("click", increment)

// better implementation is separate out exists and init check from your function's core code

if (!localStorage.getItem("botScore")) {
    localStorage.setItem("botScore", 0)
}
function increment() {
    let botScoreVal = localStorage.getItem("botScore")
    // if you use this approach, it casts the localStorage string to number
    ++botScoreVal;

    // if you use this approach, it casts the 1 to a string and concats
    // botScoreVal +=1;
    document.querySelector('h2').innerText = botScoreVal
    localStorage.setItem("botScore", botScoreVal)
}


// function increment() {
//     let botScoreVal = localStorage.getItem("botScore")
//     if (botScoreVal) {
//         ++botScoreVal;
//         document.querySelector('h2').innerText = botScoreVal
//         localStorage.setItem("botScore", botScoreVal)
//     } else {
//         localStorage.setItem("botScore", 1)
//         document.querySelector('h2').innerText = 1
//     }
// }