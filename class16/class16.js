// function pow(x,n) {
//     // return(n>=1? x^n:alert("Enter a power greater than 0"))
//     return(x**n)
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// n>=1?alert(pow(x,n)):alert("Enter a power greater than 0")
var age;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('How old are you?', age => {
    ageMessage(age);
    readline.close();
});

function ageMessage(age) {
    switch (true) {
        case age < 16:
            console.log('you can\'t drive');
            break;
        case age < 18:
            console.log("you can't hate from outside teh club; you can't even get it");
            break;
        case age < 21:
            console.log("you cannot drink");
            break;
        case age < 25:
            console.log("you cannot rent cars affordably");
            break;
        case age < 30:
            console.log("you cannot rent fancy cars affordably");
            break;
        default:
            console.log("there is nothing left to looko forward to");
            break;
    }
}