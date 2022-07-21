
var elForm = document.querySelector(".form")
var elInput = document.querySelector(".form__input")
var elSelect = document.querySelector(".form__select")
var elConvert = document.querySelector(".convert")

var usd = 10900.00;
var eur = 11700.00;
var rub = 170.00;


elForm.addEventListener("input", function(evt){
    evt.preventDefault()
    
    var inputValue = elInput.value.trim()
    
    switch (elSelect.value) {
        case "USD":
        elConvert.value = (inputValue * usd).toFixed(2);
        break;
        
        case "EUR":
        elConvert.value = (inputValue * eur).toFixed(2);
        break;
        
        case "RUB":
        elConvert.value = (inputValue * rub).toFixed(2);
        break;
    }
})

