//--------------------------------------------------------------------------------------------
//-------------------------------------------My object----------------------------------------


var objNum1 = {
    class: 'Cyborg',
    type: 'Terminator',
    model: 'T-888',
    getInfo: function(){
        var info = {};
        for (var key in this){
            if (typeof this[key] !== 'function'){
                info[key] = this[key];
            }
        }
        console.log(info);
    }
};

objNum1.getInfo();
objNum1['development'] = 'Cyberdyne Systems';
objNum1['operator'] = 'Skynet';
objNum1['humanity'] = false;
objNum1['mission'] = 'seek and destroy';
objNum1['inProgress'] = true;
objNum1['target'] = [{Name: 'Sarah Connor', status: 'liquidated'}, {Name: 'Kyle Reese', status: 'liquidated'}, {Name: 'John Connor', status: 'searching'}];
objNum1.getInfo();


//-------------------------------------------------------------------------------------------
//---------------------------------------Barbershop------------------------------------------


// var services = {
// 	cut: '60₴',
// 	shave: '80₴',
// 	wash: '100₴',
//     price: function(){
//         var total = 0;
//         for (var service in this){
//             if (this.hasOwnProperty(service) && typeof this[service] !== 'function'){
//                 total += parseFloat(this[service]);
//             }       
//         }
//         return total;   
//     },
//     minPrice: function(){
//         var minimal = Infinity;
//         for (var service in this){
//             if (this.hasOwnProperty(service) && typeof this[service] !== 'function'){
//                 var price = parseFloat(this[service])
//                     if (price < minimal){
//                         minimal = price;
//                 }
//             }
//         }
//         return minimal;
//     },
//     maxPrice: function(){
//         var maximum = -Infinity;
//         for (var service in this){
//             if (this.hasOwnProperty(service) && typeof this[service] !== 'function'){
//                 var price = parseFloat(this[service])
//                 if (price > maximum){
//                     maximum = price
//                 }
//             }
//         }
//             return maximum;
//     }
// };

// console.log('total cost of services provided: ' + services.price() + '₴');
// console.log('minimum cost of service: ' + services.minPrice() + '₴')
// console.log('maximum cost of service: ' + services.maxPrice() + '₴')
// services.nail = '30₴';
// services.mustache = '10₴';
// services.beard = '40₴';
// services.allIn = '300₴';
// console.log('total cost of services provided: ' + services.price() + '₴');
// console.log('minimum cost of service: ' + services.minPrice() + '₴')
// console.log('maximum cost of service: ' + services.maxPrice() + '₴')


//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------