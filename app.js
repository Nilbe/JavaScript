function newtodo() {
    let li = document.createElement("li");

    let inputValue = document.getElementById("todo").value;

    let t = document.createTextNode(inputValue);

    li.appendChild(t);

    if (inputValue === '') {
    } 
    else {
      document.getElementById("ul").appendChild(li);
    }

    document.getElementById("todo").value = "";
  
    let span = document.createElement("SPAN");  

    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
