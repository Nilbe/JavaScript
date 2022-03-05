function newtodo() {
        var li = document.createElement("li");
    var inputValue = document.getElementById("todo").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
    } else {
      document.getElementById("ul").appendChild(li);
    }
    document.getElementById("todo").value = "";
  
    var span = document.createElement("SPAN");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

