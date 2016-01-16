// function that will assign a prize by the value that was pressed
function vdoor(form){
	// validation for user to type numbers only between 1-3
	if(form.door.value > 3 || form.door.value < 1){
		document.getElementById("prize").innerHTML = "Door has to be between 1 to 3";
	}
	// check what door was choosen
	else{
		if(form.door.value==1)
			document.getElementById("prize").innerHTML = "You Won Vacation to Brazil!!!";
		else if(form.door.value==2)
			document.getElementById("prize").innerHTML = "You Won $10,000";
		else if(form.door.value==3)
			document.getElementById("prize").innerHTML = "You Won Aplle Mac Book Pro";
	}
}
