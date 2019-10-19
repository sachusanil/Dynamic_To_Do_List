var button = document.getElementById("Add");
var input= document.getElementById("InputEnter");
var ul = document.getElementById("Main_List");


function createNewElement(){

			var node = document.createElement("li");
			var nodebutton = document.createElement("button");
			node.classList.add("list-group-item")
			nodebutton.classList.add("btn", "btn-dark", "ml-3");
			node.appendChild(document.createTextNode(input.value));
			node.addEventListener('click', toggleDone);
			nodebutton.appendChild(document.createTextNode("Delete"));
			nodebutton.setAttribute("onclick", "delitems(this);");
			node.appendChild(nodebutton);
			ul.appendChild(node);
			input.value=("");
			
	function toggleDone() {
    	node.classList.toggle("done");
  		}
}


function delitems(e){
	e.parentNode.parentNode.removeChild(e.parentNode);
	// return;
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


function InputLength(){
	return input.value.length;
}



button.addEventListener("click", addAfterClick);
input.addEventListener("keypress", addAfterKeypress); 



