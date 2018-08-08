var answer1 = prompt("Какой ваш бюджет?", "100000");
var  answer2 = prompt("Как называется ваш магазин?");
var arr = ['тональный крем', 'помада', 'хайлайтер', 
'тушь для бровей', 'тушь для ресниц', 'BB крем'];

mainList = {

  Buget: answer1,
  ShopName: answer2,
  employers: {
	director: "Ann",
	seller: "Jane",
	scrubwoman: "Kate"

},
 	open: false
}

var dt = new Date();
var hour =dt.getHours();
if( 8 <= hour && hour < 20){
	mainList.open = true
};


mainList.shopGoods = arr;

console.log(mainList.Buget);
console.log(mainList.ShopName);
console.log(mainList.shopGoods[3]);
console.log(mainList.employers.seller);
console.log(hour);
console.log(mainList.open);



var  reply1 = prompt("Какой тип товаров будем продавать?");
var  reply2 = prompt("Какой тип товаров будем продавать?");	
var  reply3 = prompt("Какой тип товаров будем продавать?");

mainList.shopGoods.push(reply1, reply2, reply3);
alert(mainList.shopGoods);

alert(mainList.Buget/30)
