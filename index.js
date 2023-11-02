"use strict"
//-------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------Regular expression---------------------------------------------------------------------------


var firstString = 'Per aspera ad astra';
var secondString = 'Si vis pacem - para bellum';
var regularExpression = /[^Aa]{6,}/;

function stringSearcher(string) {
  const MATCH = string.match(regularExpression);
  return MATCH ? MATCH[0] : 'status: 404';
};
console.log(stringSearcher(firstString));
console.log(stringSearcher(secondString));


//---------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------Email validation------------------------------------------------------------------------------


var usersDataBase = [
  {
    id: "1",
    userName: "Nikola",
    lastName: "Tesla",
    email: "n.tesla@gmail.com",
  },
  {
    id: "2",
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com",
  },
  {
    id: "3",
    userName: "test",
    lastName: "test",
    email: "andrii@mail.ru",
  },
  {
    id: "4",
    userName: "Anton",
    lastName: "Slepakov",
    email: "test.test@gmail.com",
  },
  {
    id: "5",
    userName: "test",
    lastName: "test",
    email: ".test@gmail.com",
  },
  {
    id: "6",
    userName: "test",
    lastName: "test",
    email: "111.test@gmail..com",
  },
  {
    id: "7",
    userName: "test",
    lastName: "test",
    email: "test.testgmail.com",
  },
  {
    id: "8",
    userName: "Boris",
    lastName: "Johnson",
    email: "test.test@gmail.com",
  },
  {
    id: "9",
    userName: "test",
    lastName: "test",
    email: "test.test@gmailcom",
  },
  {
    id: "10",
    userName: "test",
    lastName: "test",
    email: "test..test@gmail.com",
  },
];

function emailValidation(){
  const EMAIL_REGULAR_EXPRESSION = /^[A-Za-z0-9]+\.?[A-Za-z0-9]*@(gmail|yahoo)\.com$/;
  const FILTRED_USERS_DATABASE = usersDataBase.filter(usersDataBase => EMAIL_REGULAR_EXPRESSION.test(usersDataBase.email));
  return FILTRED_USERS_DATABASE;
};
console.log(usersDataBase);
console.log(emailValidation(usersDataBase));


//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
