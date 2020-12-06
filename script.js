
let celsiusTextVal = document.querySelector('#celsiusVal')
let fahrenheitTextVal = document.querySelector('#fahrenheitVal')
let kelvinTextVal = document.querySelector('#kelvinVal')
let rankineTextVal = document.querySelector('#rankineVal')
let scaleType = document.querySelector('#scaleType')

document.querySelector('#calcButton').addEventListener('click', totalConverts)

//Fahrenheit Function Conversions
function fahrenheitToCelsius () {
    let fahrenheitInput = document.querySelector('#tempValueBox').value
    let product = (parseInt(fahrenheitInput) - 32) * 5/9;
    celsiusTextVal.innerHTML = product.toFixed(2) + ' C'
}
function fahrenheitValue () {
    fahrenheitVal.innerHTML = document.querySelector('#tempValueBox').value + ' F'
}
function fahrenheitToKelvin () {
    let fahrenheitInput = document.querySelector('#tempValueBox').value
    let product = (parseInt(fahrenheitInput) - 32) * 5/9 + 273.15;
    kelvinTextVal.innerHTML = product.toFixed(2) + ' K'
}
function fahrenheitToRankine () {
    let fahrenheitInput = document.querySelector('#tempValueBox').value
    let product = parseInt(fahrenheitInput) + 459.67;
    rankineTextVal.innerHTML = product.toFixed(2) + ' R'
}
// End Fahrenheit Function Conversions

// Celsius Function Conversions
function celsiusValue () {
    celsiusTextVal.innerHTML = document.querySelector('#tempValueBox').value + ' C'
}
function celsiusToFahrenheit () {
    let celsiusInput = document.querySelector('#tempValueBox').value
    let product = (parseInt(celsiusInput) * 9/5) + 32
    fahrenheitTextVal.innerHTML = product.toFixed(2) + ' F'
}
function celsiusToKelvin () {
    let celsiusInput = document.querySelector('#tempValueBox').value
    let product = parseInt(celsiusInput) + 273.15
    kelvinTextVal.innerHTML = product.toFixed(2) + ' K'
}
function celsiusToRankine () {
    let celsiusInput = document.querySelector('#tempValueBox').value
    let product = parseInt(celsiusInput) * 9/5 + 491.67
    rankineTextVal.innerHTML = product.toFixed(2) + ' R'
}
// End Celsius Function Conversions

// Kelvin Function Conversions
function kelvinValue () {
    kelvinTextVal.innerHTML = document.querySelector('#tempValueBox').value + ' K'
}

function kelvinToFahrenheit () {
    let kelvinInput = document.querySelector('#tempValueBox').value
    let product = (parseInt(kelvinInput) - 273.15) * 9/5 + 32
    fahrenheitTextVal.innerHTML = product.toFixed(2) + ' F'
}

function kelvinToCelsius () {
    let kelvinInput = document.querySelector('#tempValueBox').value
    let product = parseInt(kelvinInput) - 273.15
    celsiusTextVal.innerHTML = product.toFixed(2) + ' C'
}

function kelvinToRankine () {
    let kelvinInput = document.querySelector('#tempValueBox').value
    let product = parseInt(kelvinInput) * 1.8
    rankineTextVal.innerHTML = product.toFixed(2) + ' R'
}
//End Kelvin Conversions

//Rankine Function Conversions
function rankineValue () {
    rankineTextVal.innerHTML = document.querySelector('#tempValueBox').value + ' R'
}

function rankineToFahrenheit () {
    let rankineInput = document.querySelector('#tempValueBox').value
    let product = parseInt(rankineInput) - 459.67
    fahrenheitTextVal.innerHTML = product.toFixed(2) + ' F'
}

function rankineToCelsius () {
    let rankineInput = document.querySelector('#tempValueBox').value
    let product = (parseInt(rankineInput) - 491.67) * 5/9
    celsiusTextVal.innerHTML = product.toFixed(2) + ' C'
}

function rankineToKelvin () {
    let rankineInput = document.querySelector('#tempValueBox').value
    let product = parseInt(rankineInput) * 5/9
    kelvinTextVal.innerHTML = product.toFixed(2) + ' K'
}
//End Rankine Conversions

function totalConverts () {
    if (scaleType.value === 'fahrenheit') {
    fahrenheitToCelsius()
    fahrenheitValue()
    fahrenheitToKelvin()
    fahrenheitToRankine()
    } else if (scaleType.value === 'celsius') {
    celsiusValue()
    celsiusToFahrenheit()
    celsiusToKelvin()
    celsiusToRankine()
    } else if (scaleType.value === 'kelvin') {
    kelvinValue()
    kelvinToFahrenheit()
    kelvinToCelsius()
    kelvinToRankine()
    } else if (scaleType.value === 'rankine') {
    rankineValue()
    rankineToFahrenheit()
    rankineToCelsius()
    rankineToKelvin()
    }
}



