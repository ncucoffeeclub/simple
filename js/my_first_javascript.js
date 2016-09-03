alert("This is in javascript");

function test(){
	var A = 1;

	this.getA = function(){
		return A;
	}
}

var test2 = new function (){
	var A = 1;

	this.getA = function(){
		return A;
	}
}

console.log(test); //------------------------1
console.log(test2);
console.log(test2.getA()); //---------------------------2
