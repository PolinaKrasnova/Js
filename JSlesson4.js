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
	open: false,
	ShopItems:[],
	start: function start(){
	money = prompt("Какой ваш бюджет?", "100000");

    while(isNaN(money) || money == "" || money == null){
    	money = prompt("Какой ваш бюджет?", "100000");

    }
        name = prompt("Как называется ваш магазин?",'').toUpperCase();
}
,
showTime: function showTime() {
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

},
chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {
		items= prompt("Какой тип товаров будем продавать?",'');
		
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
},
countDayBuget:function countDayBuget() {
	alert('Ваш бюджет на день' + money/30);
},
disconCount: function disconCount(){
	let prise = prompt('введите цену товара','');
	while(isNaN(prise) || prise == "" || prise == null){
    	prise = prompt('введите цену товара','');
    }
    if (discount = true) {
    	let yourDiscount = prise*80/100;
    	alert('ваша скидка: '+ yourDiscount);
    }
    else {
    	alert( 'скидок на данный товар пока нет');
    }
},
addEmployers: function addEmployers(){
	for(let i = 0 ; i < 4; i++){
		let n = mainList.employers.nameEmployer[i] = i + "-" + prompt('Введите имя сотрудника','');
	}

},
cooseShopItems: function cooseShopItems()
{
    	for( let i = 1; i < 2; i++){
	    let items = prompt("Перечислите товары через запятую","");
	   
		let onemoreit = (prompt("Подождите, еще ",""));
		
	    if((typeof(items)) === 'string'  && items !='' && (typeof(items))!= null && (typeof(onemoreit)) === 'string'  && onemoreit !='' && (typeof(onemoreit))!= null )
			{
				console.log('все верно!'); 
				mainList.ShopItems = items.split(",");
                mainList.ShopItems.push(onemoreit);
	            mainList.ShopItems.sort();
		
			} else {
			    alert ("Пожалуйста, введите товары правильно");
			    i--;
			    }
			};
			mainList.ShopItems.forEach(function(item, i, arr) {
				console.log("В намшем магазине вы можете купить: ");
  console.log( ++i + ": " + item + " (массив:" + arr + ")" );
});
		

				
	        }
}
for (let key in mainList){
	console.log("Наш магазин включает в себя:" );
	console.log('Свойство:   ' + key + "  имеет значение  " + mainList[key])
}

	    
	    	


alert(mainList.shopGoods);
