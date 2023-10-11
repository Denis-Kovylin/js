//----------------------------------------------------------------------
//-------------------------Triangle ver1--------------------------------

// function draw_triangle(triangleHeight, triangleSymbol){  
//     let iterator = 0;
//     let triangleRow = "";
//     while(iterator < triangleHeight){
//         triangleRow += triangleSymbol;
//         console.log(triangleRow);
//         iterator++
//     }
// }
// draw_triangle(5, "*");

//----------------------------------------------------------------------
//-------------------------Triangle ver2--------------------------------

// function draw_triangle(triangleHeight, triangleSymbol) {
//     let triangleRow = "";
//     for (let iterator = 0; iterator < triangleHeight; iterator++) {
//         triangleRow += triangleSymbol;
//         console.log(triangleRow);
//     }
// }
// draw_triangle(5, "*");

//-----------------------------------------------------------------------
//----------------Sum of numbers not divisible by three------------------

// var sumOfNumbers = 0;
// var numberSwitcher = 0;

// while (numberSwitcher < 101){
//    if (numberSwitcher % 3 !== 0) {
//     sumOfNumbers += numberSwitcher;
//    }
//    numberSwitcher++;
//    continue;
// }
// console.log(sumOfNumbers);

//-----------------------------------------------------------------------
//-------------------------How old are you-------------------------------


var age = prompt("Будьласка, вкажіть скільки тобі років");

if (age !== NaN && age > 0){

    let modulo10Division = age % 10;
    let modulo100Division = age % 100;

    if (modulo100Division >= 11 && modulo100Division <= 19){
        console.log("Твій вік " + age + " років");
    }
    else if (modulo10Division >= 2 && modulo10Division <=4){
        console.log("Твій вік " + age + " роки");
    }
    else if (modulo10Division === 1){
        console.log("Твій вік " + age + " рік");
    }
    else if (modulo10Division === 0 || modulo10Division >= 5 && modulo10Division <= 9){
        console.log("Твій вік " + age + " років");
    }
    else{
        console.log("Твій вік " + age + " роки");
    }
}
else{
    console.log("Ти втераєш мені якусь дічь!");
}


//-----------------------------------------------------------------------
//-----------------------------------------------------------------------




// Написати функцію pow(x,y) яка буде приймати 2 цисла, перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.

// Наприклад pow(2,3) функція поверне значення 8.

// Умови виконання ДЗ

// Не використовувати **
// Не використовувати функції або інші матеріали які ми не вивчали
// Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
// Будь ласка, надайте наступні дані для перевірки вашої роботи:

// Створіть гілку js_homework3.
// Додати туди ваше домашне завдання
// Вислати вашу гілку

