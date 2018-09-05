
let assert = require('chai').assert;
function sum(a, b) {
	return a + b > 10;
}
describe('sum', function(){
		it("проверка на тип данных", function(){
			assert.equal(sum(2,2), true);
		})

})



let a = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = a[1][1];

 


		
	
describe('num', function(){
it("проверка массива", function(){
			assert.equal(num, 5);
		})
})






var each = function(startArr, f){return f(startArr)};
var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));


describe('cheach function', function(){
it("проверка функции на тип данных", function(){
			assert.typeOf(each(arr, myFunc),'array');
		})
it("проверка функции на результат", function(){
			assert.typeOf(each(arr, myFunc),'object')
		})
it("проверка функции на длину", function(){
			assert.lengthOf(each(arr, myFunc), 5, "function each has a length of 5");
		})
})