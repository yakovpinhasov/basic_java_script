
console.log("hello tacos");
function changeMe(){
	document.getElementById("changer").innerHTML = "SOME NEW TEXT!!!";

}
// function that adding two numbers
function addNums(){
	num1 = document.getElementById('num1').value;
	num2 = document.getElementById('num2').value;
	document.getElementById('result').innerHTML = (parseInt(num1)+parseInt(num2));
}
// function that add 10 to numbers
function numbersPlusTen(numberOne, NumberTwo){
 	return numberOne + 10 + NumberTwo;
 }
console.log(numbersPlusTen(90,400));
// js for loop
for(i = 0; i <10; i++){
 	console.log ("on iteration:" + i);
 }
// js while loop
 x = 0;
while(x < 20){
	console.log(x + "bottles of root beer on the wall");
	x++;
}

 function validator(event){
	debugger;
	event.preventDefault();

}
// jscript object function
function User(firstname,lastname,username,password){
	this.firstname = firstname;
	this.lastname = lastname;
	this.username = username;
	this.password = password; 
	this.i = function User(){
		return "Your First name is:" + this.firstname;
	}
}

Date.prototype.isFriday = function()
{
	
	if(this.getDay()===5)
	{
		return "Yes";
	}
		else
		{
			return "No";
		}
}
