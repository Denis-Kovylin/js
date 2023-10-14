//----------------------------------------------------------------------
//-------------------------Triangle ver1--------------------------------

function draw_triangle(triangleHeight, triangleSymbol){  
    let iterator = 0;
    let triangleRow = "";
    while(iterator < triangleHeight){
        triangleRow += triangleSymbol;
        console.log(triangleRow);
        iterator++
    }
}
draw_triangle(5, "*");

//----------------------------------------------------------------------
//-------------------------Triangle ver2--------------------------------

function draw_triangle(triangleHeight, triangleSymbol) {
    let triangleRow = "";
    for (let iterator = 0; iterator < triangleHeight; iterator++) {
        triangleRow += triangleSymbol;
        console.log(triangleRow);
    }
}
draw_triangle(5, "*");

//-----------------------------------------------------------------------
//----------------Sum of numbers not divisible by three------------------

var sumOfNumbers = 0;
var numberSwitcher = 0;

while (numberSwitcher < 101){
   if (numberSwitcher % 3 !== 0) {
    sumOfNumbers += numberSwitcher;
   }
   numberSwitcher++;
   continue;
}
console.log(sumOfNumbers);

//-----------------------------------------------------------------------
//-------------------------Function Exponentiation-----------------------

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


