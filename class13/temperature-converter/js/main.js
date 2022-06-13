document.querySelector('#celsius').addEventListener('click', function(){convert("celsius")});
document.querySelector('#fahrenheit').addEventListener('click', function(){convert("fahrenheit")});

function convert(typeOfConvert){
    const initialTemp = document.querySelector('#temperature').value
    console.log(initialTemp)
    console.log(typeOfConvert)
    if (typeOfConvert==="celsius") {
        document.querySelector('#placeToSee').innerText =`${(initialTemp-32)*(5/9)} degrees celsius`
    } else {
        document.querySelector('#placeToSee').innerText =`${(initialTemp*9/5)+32} degrees fahrenheit`
    }
}