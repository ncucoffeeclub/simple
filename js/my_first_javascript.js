alert("This is in javascript");

var test = function (){
	var a = 1;

	function geta(){
		return a;
	}
}
console.log(test); //------------------------1
console.log(test.geta()); //---------------------------2
