var answer1 = prompt("Какой ваш бюджет?", "100000");
var answer2 = prompt("Как называется ваш магазин?");

let mainList = {
  Buget: answer1,
  ShopName: answer2,
  employers: {},
  shopGoods:[],
  open: false
}

var dt = new Date();
var hour =  dt.getHours();
if( 8 <= hour && hour < 20){
	mainList.open = true;
	console.log('время работать');
};






console.log(mainList.Buget);
console.log(mainList.ShopName);
console.log(hour);
console.log(mainList.open);

for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	
	if ((typeof(a)) === 'string'  && a !='' && a.length < 50 ) {
		console.log('все верно!');
		mainList.shopGoods[i] = a;
	} else {
	    	(typeof(a)) === null;
	    	alert ("Попробуйте снова");
	    	i--;
	    }
}

/*var i = 0;
while (i < 5){
	i++;
	let a = prompt("Какой тип товаров будем продавать?");
	
	if ((typeof(a)) === 'string'  && a !='' && a.length < 50 ) {
		console.log('все верно!');
		mainList.shopGoods[i] = a;
	} else {
	    	(typeof(a)) === null;
	    	alert ("Попробуйте снова");
	    	i--;
	    }

}*/


/*var i = 1;
do{
	let a = prompt("Какой тип товаров будем продавать?");
	
	if ((typeof(a)) === 'string'  && a !='' && a.length < 50 ) {
		console.log('все верно!');
		mainList.shopGoods[i] = a;
	} else {
	    	(typeof(a)) === null;
	    	alert ("Попробуйте снова");
	    	i--;
	    }
	    i++;
	} 
	while (i < 6);
*/

alert(mainList.shopGoods);
alert(mainList.Buget/30);
console.log(mainList);