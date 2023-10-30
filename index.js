"use strict"
//--------------------------------------------------------------------------------------------
//-----------------------------------Blend array function-------------------------------------


var arrayToBlend = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myBlend(array){
    for(var iterator = arrayToBlend.length - 1; iterator > 0; iterator--){
        var randomIndex = Math.floor(Math.random() * (iterator + 1));
        var tempValue = arrayToBlend[iterator];
        arrayToBlend[iterator] = arrayToBlend[randomIndex];
        arrayToBlend[randomIndex] = tempValue;
    }
    return array;
};
console.log(myBlend(arrayToBlend));


//-------------------------------------------------------------------------------------------
//---------------------------------------Barbershop----------------------------------------KEY

const COMPANY = {
    name: 'Big Company',
    type:'Main Company',
    platform: 'Flower Sales Platform',
    sellsSolution: 'Solution for Selling Flowers',
    clients: [
      {
        name: 'Client 1',
        type: 'subCompany',
        uses: 'Software for Selling Flowers',
        sells: 'Solution for Selling Flowers',
        partners: [
          {
            name: 'Client 1.1',
            type: 'subSubCompany',
            uses: 'Solution for Selling Flowers',
            sells: 'Solution for Selling Flowers',
          },
          {
            name: 'Client 1.2',
            type: 'subSubCompany',
            uses: 'Solution for Selling Flowers',
            sells: 'Solution for Selling Flowers',
            partners: [
              {
                name: 'Client 1.2.3',
                type: 'subSubCompany',
                uses: 'Solution for Selling Flowers',
                sells: 'Solution for Selling Flowers',
                partners: [
                    {
                      name: 'Client 1.2.3.1',
                      type: 'subSubCompany',
                      uses: 'Solution for Selling Flowers',
                      sells: 'Solution for Selling Flowers',  
                    }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Client 2',
        type: 'subCompany',
        uses: 'Software for Selling Flowers',
        sells: 'Solution for Selling Flowers'
      }
    ]
  };

function findValueByKey(object, companyName){
    if (object.name === companyName){
      return{
        name: object.name,
        type: object.type,
        uses: object.uses,
        sells: object.sells
      };
    } else {
      for (const KEY in object){
        if (Array.isArray(object[KEY])){
          for (const ITEM of object[KEY]){
            if (typeof ITEM === "object"){
              const DETAILS = findValueByKey(ITEM, companyName);
              if (DETAILS != undefined){
                return DETAILS;
              };
            };
          };
        };
      };
    };
    return null;
  };

console.log(findValueByKey(COMPANY, "Client 1.2"));


//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
