var button = document.getElementById("Add");
var input= document.getElementById("InputEnter");
var ul = document.getElementById("Main_List");


function createNewElement(){
// Create the new li element, add the boostrap classes to it and add the event listenr for the style toggle funtcion 
			var node = document.createElement("li");
			node.classList.add("list-group-item")
			node.appendChild(document.createTextNode(input.value));
			node.addEventListener('click', toggleDone);

// Create the new button  element, add the boostrap classes to it and add function to delete parent li when the button is pressed
			var nodebutton = document.createElement("button");
			nodebutton.classList.add("btn", "btn-dark", "ml-3");
			nodebutton.appendChild(document.createTextNode("Delete"));
			nodebutton.setAttribute("onclick", "delitems(this);");

//adding the new button to li, and the li to ul.

			node.appendChild(nodebutton);
			ul.appendChild(node);
			input.value=("");

//funtion to toggle the stlye
	function toggleDone() {
    	node.classList.toggle("done");
  		}
}

//funtion to delete items.
function delitems(e){
	e.parentNode.parentNode.removeChild(e.parentNode);
}

function addAfterClick(){ 
	if(InputLength()>0){
		createNewElement(); 
	}	
}

function addAfterKeypress(event){ 
	if(InputLength()>0 && event.keyCode===13){
		createNewElement(); 
	}	
}



function toggleDone() {
    li.classList.toggle('done');
  }

//funtion to check the lengh of the input. 
function InputLength(){
	return input.value.length;
}



button.addEventListener("click", addAfterClick);
input.addEventListener("keypress", addAfterKeypress); 



