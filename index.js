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