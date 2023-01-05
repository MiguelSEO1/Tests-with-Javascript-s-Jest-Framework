// importar la función fromEuroToDollar del archivo app.js

const { fromEuroToDollar, fromDollarToYen, fromYenToPound  } = require('./app.js')


test("One euro should be 1.206 dollars", function(){

// hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

test("One Dollar should be 132.97 Yenes", function(){

    // hago mi comparacion (la prueba)
        expect(fromDollarToYen(3.5)).toBe(465.395); //1 Dollar son 132.97 Yenes, entonces 3.5 dolares deberían ser = (3.5 * 132.97)
    });

test("One Yen should be 0.0063 pound", function(){

    // hago mi comparacion (la prueba)
        expect(fromYenToPound(3.5)).toBe(0.02205); //1 Yen son 0.0063 GBP, entonces 3.5 yenes deberían ser = (3.5 * 0.0063)
    });

    