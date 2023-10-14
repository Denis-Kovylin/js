//-----------------------------------------------------------------------
//-------------------------How old are you-------------------------------

var sum = 1;

function exponentiation(base, exponent) {
    if (exponent >= 0) {
        for (let iterator = 1; iterator <= exponent; iterator++) {
            sum = sum * base;
        }
    } else {
        for (let iterator = 1; iterator <= -exponent; iterator++) {
            sum = sum / base;
        }
    }

    console.log(sum);
}
exponentiation(10, -1);

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------


