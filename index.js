var units = "jj"  //Единици измерения ("kg" (kilogram), "hr" (hour), "km" (kilometer))
var quantity = 10  //Количество единиц (1, 5, 10, 1000....)

switch (units) {
    case "km":
        console.log(quantity + " км це " + (quantity * 1000) + " м.");
        break;
    case "hr":
        console.log(quantity + " гд це " + (quantity * 60) + " хв.");
        break;
    case "kg":
        console.log(quantity + " кг це " + (quantity * 1000) + " грм.");
        break;
    default:
        console.log("Чувааак, не гальмуй!");
        break;
}

