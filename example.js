var toggleColor = "#00FF00";

(function(){
	var example = document.getElementById("dom-example");
	while(example.firstChild) {
		example.removeChild(example.firstChild);
	}
})();

function exChangeColor() {

	// Change the color
	toggleColor = toggleColor === "#00FF00" ? "#FF0000" : "#00FF00";

	// Grab all elements with class name exampleElements
	var exampleElements = document.getElementsByClassName('exampleElements');

	// Change color for all class elements
	for(var i = 0; i < exampleElements.length; i ++) {
		var ele = exampleElements[i].setAttribute("style","color:" + toggleColor);
	}
	
}

function exAddNode() {

	// Get parent node dom-example
	var example = document.getElementById("dom-example");

	// Create our node
	var newParagraph = document.createElement("p");
	
	// Set our attributes for new node
	newParagraph.setAttribute("style","color:" + toggleColor);
	newParagraph.setAttribute("class","exampleElements");

	// Create text to put into our element.
	// The text will be called a text node.
	var newText = document.createTextNode("Hello");

	// Add our text to our new paragraph
	newParagraph.appendChild(newText);

	example.appendChild(newParagraph);
}

function exDeleteNode() {

	// Get parent node dom-example
	var example = document.getElementById("dom-example");
	if(example.lastChild)
		example.removeChild(example.lastChild);
}