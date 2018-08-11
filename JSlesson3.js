var money, 
    name,
    hour
let discount = true;

let mainList = {
	Buget: money,
	ShopName:  name,
	employers: {
		number: [],
		nameEmployer: []
	},
	shopGoods:[],
	open: false
}

function start(){
	money = prompt("Какой ваш бюджет?", "100000");

    while(isNaN(money) || money == "" || money == null){
    	money = prompt("Какой ваш бюджет?", "100000");

    }
        name = prompt("Как называется ваш магазин?").toUpperCase();
}

start();
	

function showTime() {
	var dt = new Date();
    var hour =  dt.getHours();
	    if ( 8 <= hour && hour < 20) {
		mainList.open = true;
		console.log('время работать');
	}else {
		console.log('время отдохнуть');
	}
	console.log(hour);
	console.log(mainList.open);

}

showTime();

function chooseGoods() {
		for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");
		
		if ((typeof(a)) === 'string'  && a !='' && a.length < 50 )
		{
			console.log('все верно!');
			mainList.shopGoods[i] = a;
		} else {
		    	(typeof(a)) === null;
		    	alert ("Попробуйте снова");
		    	i--;
		    }
        }
}

chooseGoods();

function countDayBuget() {
	alert('Ваш бюджет на день' + money/30);
}

countDayBuget();

function disconCount(){
	let prise = prompt('введите цену товара');
	while(isNaN(prise) || prise == "" || prise == null){
    	prise = prompt('введите цену товара');
    }
    if (discount = true) {
    	let yourDiscount = prise*80/100;
    	alert('ваша скидка: '+ yourDiscount);
    }
    else {
    	alert( 'скидок на данный товар пока нет');
    }
}


disconCount();

function addEmployers(){
	for(let i = 0 ; i < 4; i++){
		let n = mainList.employers.nameEmployer[i] = i + "-" + prompt('Введите имя сотрудника');
	}

}


addEmployers();


alert(mainList.shopGoods);


console.log(mainList.ShopName);
console.log(mainList.open);
console.log(mainList);