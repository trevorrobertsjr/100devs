//---Easy
//create a function that subtracts two numbers and alerts the difference

//create a function that divides three numbers and console logs the quotient

//create a function that multiplys three numbers and returns the product

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function fourNumbers(a, b, c, d) {
    let testProduct = a * b;
    if (testProduct > 100) {
        console.log(c + d);
    } else if (testProduct < 100) {
        console.log(c - d);
    } else {
        alert(a * b * c % d);
    }
}

let test = [1, 2, 3, 4, 5]

console.log(test[test.length - 1])
test.forEach((x, i) => console.log(x))

for (i of test) {
    console.log(i)
}

let musketeers = ["Athos", "Porthos", "Aramis"]
musketeers.push("D'Artagnan")

musketeers.forEach((x, i) => {
    if (x == "Aramis") {
        musketeers.splice(i, 1)
    }
});

console.log(musketeers)

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); 