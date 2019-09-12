function myFunction(){
	 
	var a = document.getElementById("getValue");
	var b = a.value;
	document.getElementById("demo").innerHTML ="the text contains " + b.length +" "+ b;
}

var myVar=setInterval(myFunction10);

function myFunction10(){
	var d = new Date();
	var t = d.toLocaleTimeString();
	document.getElementById("demo5").innerHTML = t;
}

function stopFunction(){
	clearInterval(myVar);
}