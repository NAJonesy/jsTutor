let checklist = document.getElementById("checklist");

let items = checklist.querySelectorAll("li");
let inputs = checklist.querySelectorAll("input");

for(var i = 0; i < items.length; i++){
    items[i].addEventListener("click", editItem);
    inputs[i].addEventListener("blur", updateItem);
    inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem(){
    this.className = "edit";
    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function updateItem(){
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

function itemKeypress(event) {
    if(event.which === 13){
        updateItem.call(this);
    }
}

//document.getElementById("addItem").addEventListener("click", addLi);

function addLi(){
   var li = document.createElement("li");
   var span = document.createElement("span");
   var inpt = document.createElement("input");
   li.addEventListener("click", editItem);
   inpt.addEventListener("blur", updateItem);
   inpt.addEventListener("keypress", itemKeypress);
   inpt.setAttribute("value", "New Item");
    span.innerText = "New Item";
    li.appendChild(span);
    li.appendChild(inpt);
    checklist.appendChild(li);

}

function makeSentence(){
    items = checklist.querySelectorAll("li");
    var sentence = "";
    for(var i = 0; i < items.length; i++){
        console.log(items[i].innerText);
        if(i == (items.length -1)){
            sentence += "and " + items[i].innerText;
        }else{
            sentence += items[i].innerText +", ";
        }
       
    }
    document.getElementById("output").innerText = "I need to: "+ sentence + ".";
}

function deleteItem() {

    // if(){

    // }
    console.log(document.activeElement);

}