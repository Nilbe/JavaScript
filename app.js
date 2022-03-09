let newtodoButton = document.getElementById("newtodo");
let todo = document.getElementById("todo");
let input = document.getElementById("input");

newtodoButton.addEventListener('click', function(){
  let paragraph = document.getElementById('p')
  paragraph.innerText = input.nodeValue;
  todo.appendChild(paragraph);

})