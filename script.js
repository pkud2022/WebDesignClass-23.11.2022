function lyrics(){
	for(var i=99;i>2;i--){
	document.getElementById("main").innerHTML+=i+" bottles of beer on the wall, "+i+" bottles of beer"+"<br />"+"Take one down and pass it around, "+(i-1)+" bottles of beer on the wall"+"<br />"+"<br />";
	}
	document.getElementById("main").innerHTML+="2 bottles of beer on the wall, 2 bottles of beer"+"<br />"+"Take one down and pass it around, 1 bottle of beer on the wall"+"<br />"+"<br />"+"1 bottle of beer on the wall, 1 bottle of beer"+"<br />"+"Take one down and pass it around, no more bottles of beer on the wall"+"<br />"+"<br />"+"No more bottles of beer on the wall, no more bottles of beer"+"<br />"+"Go to the store and buy some more, 99 bottles of beer on the wall"+"<br />";

}