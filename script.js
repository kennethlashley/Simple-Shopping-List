var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");




function inputLength () {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	
	/*buttons*/

	var btn1 = document.createElement ("button");
	btn1.innerHTML = "Delete";
	li.appendChild(btn1);

	/*remove element*/

	btn1.addEventListener("click", function () {
		li.parentNode.removeChild(li);
	})
	
	/* adding strike through to list items*/
	
	li.addEventListener("click", function () {
	li.classList.toggle("done");
});
	ul.appendChild(li);
	input.value = "";
		}

function addListAfterClick() {
	if (inputLength() > 0) {
	console.log(input.value);
	createListElement();
  }
}

function addListAfterKeyPress(event) {
	if (inputLength() > 0 && event.keyCode == 13) {
	console.log(input.value);
	createListElement();
  }
}

/* click to add input to list */
button.addEventListener("click", addListAfterClick);

/* press enter to add input to list*/
input.addEventListener("keypress", addListAfterKeyPress);



