function onKeyPress(key_id) {
	document.getElementById(key_id).style.backgroundColor = "green";
	document.getElementById(key_id).style.color = 'white';
}

function onKeyRelease(key_id) {
	document.getElementById(key_id).style.backgroundColor = "white";
	document.getElementById(key_id).style.color = 'green';
}

/*clear screen function*/
function clearScreen() {
	document.getElementById('screen').value = "";
}

/*clear screen function ends here*/

/*display on screen function function*/
function display(value) {
	document.getElementById('screen').value += value;
}
/*display function ends here*/

/*compute function */
function compute() {
	var expression = document.getElementById('screen').value;
	var result = eval(expression);
	document.getElementById('screen').value = result;
}
/*compute function ends here*/

/*This section formats the number keys on mouse over*/
function numKeyPress(key_id) {
	document.getElementById(key_id).style.backgroundColor = "white";
	document.getElementById(key_id).style.border ="3px solid green";
	document.getElementById(key_id).style.color = 'green';
}
/*Ends here*/

/*This section formats the number keys on mouse out*/
function numKeyRelease(key_id) {
	document.getElementById(key_id).style.backgroundColor = "green";
	document.getElementById(key_id).style.color = 'white';
}
/*Ends here*/

/*This section formats the clear keys on mouse over*/
function clearKeyPress(key_id) {
	document.getElementById(key_id).style.backgroundColor = "red";
	document.getElementById(key_id).style.border ="3px solid red";
	document.getElementById(key_id).style.color = 'white';
}
/*Ends here*/

/*This section formats the clear keys on mouse out*/
function clearKeyRelease(key_id) {
	document.getElementById(key_id).style.backgroundColor = "white";
	document.getElementById(key_id).style.border ="3px solid red";
	document.getElementById(key_id).style.color = 'red';
}
/*Ends here*/