function checkAge(){
    var age = document.querySelector('.age').value;
    age = parseInt(age);
    age = age != NaN ? age : 0;
    var label = "років";
    if (age %10 == 1){
        label = "рік"
    } 
    if (age %10 >=2 && age %10 <=4){
        label = "року"
    }
    if (age %10 >=5 && age %10 <=9){
        label = "років"
    }
    if (age >= 10 && age <= 20){
        label = "років"
    }
    if (age >= 110 && age <= 120){
        label = "років"
    }
    alert('Ваш вік ' + age +' '+ label)
}

