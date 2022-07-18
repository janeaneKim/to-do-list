let list = document.querySelector('ul');
let newItem = document.getElementById('newItem');
let newLi = document.createElement('li');
let button = document.querySelector('button');
let listItem = document.querySelectorAll('li');

//append newLi to list
button.addEventListener("click", function(e) {
    e.preventDefault();
    newLi.textContent = newItem.value;      
    list.appendChild(newLi);   
    newItem.value = "";      
  })

// taking away list item
for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener("click", () => {
        list.removeChild(listItem[i]); 
    });
}


