function run() {
    var a = parseInt(document.getElementById("a").value);
    var c = document.getElementById("content");
    var n = document.createElement("p");    
    n.appendChild(document.createTextNode(minus(a)) - 1);
    c.appendChild(n);
}
 
function minus(a) {
     a - 1;
     return a - 1;
}