// let age = 16; // take 16 as an example

// if (age < 18) {
//     welcome();               // \   (runs)
//     //  |
//     function welcome() {     //  |
//         console.log("Hello!");       //  |  Function Declaration is available
//     }                        //  |  everywhere in the block where it's declared
//     //  |
//     welcome();               // /   (runs)

// } else {

//     function welcome() {
//         console.log("Greetings!");
//     }
// }

let num = 1;
num -= 10;
console.log(num);


h1Holder.addEventListener('click', sum)

function sum() {
    let inputedVal = document.querySelector('#elementID').value
    console.log(num + Number(inputedVal))
}