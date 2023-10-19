//-------------------------------------------------------------------------------
//-------------------------Costume isNaN function--------------------------------

// var valueX = 1488;
// var valueY = 'ggg';
// var valueZ = -666;

// function costumeIsNaN(inputValue){
//     if (typeof(inputValue) === "number" && isFinite(inputValue)){
//         console.log('Your entered data is: ' + typeof(inputValue) +', and has value: ' + inputValue + '.' );
//     }
//     else{
//         console.log('this is not a Number');       
//     }
// }
// costumeIsNaN(valueX);
// costumeIsNaN(valueY);
// costumeIsNaN(valueZ);

//-------------------------------------------------------------------------
//---------------------Costume padEnd\padStart-----------------------------

// var firstString = 'GOTT_MIT_UNS';
// var secondString = 'TRUE_TILL_DEATH';
// var anotherString = 'A_PERFECT_CIRCLE';

// var firstCount = 15;
// var secondCount = 30;
// var anotherCount = 45;

// var firstSymbol = '*';
// var secondSymbol = '\'';
// var anotherSymbol = '~';

// var derectionStart = true;
// var derectionEnd = false;

// function costumePad(inputString, countPad, symbolPad, derectionPad){
//     let symbolQuantity = Math.max(0, countPad - inputString.length);
//     let outputString = inputString;

//     if (derectionPad === true){
//         for (let itr = 0; itr < symbolQuantity; itr++){
//             outputString = symbolPad + outputString;
//         }
//     } else{
//         for (let itr = 0; itr < symbolQuantity; itr++){
//             outputString = outputString + symbolPad;
//         }      
//     }
//     return outputString;
// }
// console.log(costumePad(firstString, firstCount, firstSymbol, derectionStart));
// console.log(costumePad(secondString, secondCount, secondSymbol, derectionEnd));
// console.log(costumePad(anotherString, anotherCount, anotherSymbol, derectionStart));

//-----------------------------------------------------------------------
//-------------------------Check Probability Theory------------------

var evenQuantity = 0;
var allQuantity = 0;
var oddQuantity = 0;

var evenPercentage = 0;
var oddPercentage = 0;



function checkProbabilityTheory(count){
    
    for(let switcher = 0; switcher < count; switcher++){
        var randomInt = Math.ceil((Math.random() * 100) * 100);
        if (randomInt % 2 === 0){
            evenQuantity++;
            allQuantity++;
        }
        else{
            oddQuantity++;
            allQuantity++;
        }


    }
    evenPercentage = (evenQuantity / allQuantity * 100).toFixed(1);
    oddPercentage = (oddQuantity / allQuantity * 100).toFixed(1);

}
checkProbabilityTheory(100);

console.log('Numbers generated: ' + allQuantity);
console.log('Paired numbers: ' + evenQuantity);
console.log('Unpaired numbers: ' + oddQuantity);
console.log('Percentage ratio: ' + oddPercentage + '% ' + 'to ' + evenPercentage + '% (odd to even)' );

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------


