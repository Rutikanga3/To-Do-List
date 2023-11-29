let inputBx =document.querySelector('#inputb');
let list =document.querySelector('#list');

// let li = document.createElement('li')
inputBx.addEventListener('keyup', function(event){
 if(event.key == 'Enter'){
    addItem(this.value)
    this.value = ''
 }  
})
let addItem = (inputbx) => {
    let listItem = document.createElement('li');
    // listItem.innerHTML = '${inputBx}<i><i>';
    listItem.innerText = inputbx.value ; 
     list.appendChild(listItem);

}