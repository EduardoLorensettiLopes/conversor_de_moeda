const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector("#converter-para")


function convetValues(){
    const inputCurrencyValue = document.querySelector("#input-real").value

    const currencyValueToConvert = document.querySelector("#real-value-text") // Valor em Real
    const currencyValuecConverted = document.querySelector("#value-text") // Outras Moedas

    const dolayToday = 4.97
    const euroToday = 5.26
    const btcToday = 131.526
    const libraToday = 6.06

    if(currencySelect.value == "dolar"){
        currencyValuecConverted.innerHTML =  new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolayToday)
    }
    if(currencySelect.value == "euro"){
        currencyValuecConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }
    if(currencySelect.value == "btc"){
        currencyValuecConverted.innerHTML = new Intl.NumberFormat
        ('de-DE', 
        { 
        style: 'currency', 
        currency: 'BTC'
        }).format(inputCurrencyValue / btcToday)
    }
    if(currencySelect.value == "libra"){
        currencyValuecConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue)
    
}
function changeCurrency(){
    const currencyName = document.querySelector("#currency-name")
    const currencyImage = document.querySelector("#currency-img")
    
    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src ="./assets/euro.png"
    }
    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src ="./assets/usa.png"
    }
    if(currencySelect.value == "btc"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
}


convertButton.addEventListener("click", convetValues)
currencySelect.addEventListener("change", changeCurrency)

