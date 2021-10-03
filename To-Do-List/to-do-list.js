let myList = document.getElementsByTagName("li");
let inputValue = document.getElementById("myInput").value;
let close = document.getElementsByClassName("delete");
let list = document.querySelector("ul");
let li = document.createElement("li");
let span = document.createElement("span");
let text = document.createTextNode(inputValue);

var counter;

for (counter = 0; counter < myList.length; counter++){
    span.className = "close";
    span.appendChild(text);
    myList[counter].appendChild(span);
}

for(counter = 0; close.length; counter++){
    close[counter].onclick;
}

list.addEventListener('click', function(ev){
    if (ev.target.tagName === 'li'){
        ev.target.classList.toggle('checked');
    }
}, false);

function newItem(){
    li.appendChild(text);
    document.getElementById("main_list").appendChild(li);
    document.getElementById("userInput").value = "";
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    for(counter = 0; close.length; counter++){
        close[counter].onclick;
    }
}