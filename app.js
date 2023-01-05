
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
};

// one dollar is:
let oneDollar = {
    "JPY": 132.97 // japan yen
};


// declaramos una funcion con el nombre "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a Yen
    let valueInYen = valueInDollar * 132.97;
    // retornamos el valor
    return valueInYen;
}

// one Yen is:
let oneYen = {
    "GBP": 0.0063 // british pound
}

// declaramos una funcion con el nombre "fromYenToPound"
const fromYenToPound = function(valueInYen){
    // convertimos el valor a GBP
    let valueInPound = valueInYen * 0.0063;
    // retornamos el valor
    return valueInPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }