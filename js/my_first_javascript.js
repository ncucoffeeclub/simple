alert("This is in javascript");

var test = new function(){
	var A = 1;

	this.getA = function(){
		return A;
	}
}
console.log(test); //------------------------1
console.log(test.getA()); //---------------------------2
