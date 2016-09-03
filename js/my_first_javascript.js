alert("This is in javascript");

function test(){
	var a = 1;

	function geta(){
		return a;
	}
}
console.log(test); //------------------------1
console.log(test.geta()); //---------------------------2
