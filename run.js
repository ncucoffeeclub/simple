function run() {
    var a = parseInt(document.getElementById("a").value);
    var c = document.getElementById("content");
    var n = document.createElement("p");    
    n.appendChild(document.createTextNode(minus(a)));
    c.appendChild(n);
}
 
function minus(a) {
     a - 1;
     return function run()
}