const myMessage = document.querySelector('.myMessage');
const theMessageButton = document.querySelector('.theMessageButton');
const clearMessageButton = document.querySelector('.clearMessageButton');
const inputBox = document.querySelector('.theInputValue');
const fruitList = document.querySelector(".fruits");
const fruitInput = document.querySelector(".inputFruit");
const addFruitButton = document.querySelector(".addFruitButton");


// setTimeout(function(){
//     myMessage.innerText = 'This is a message in the DOM!'
// }, 3000 )

// theMessageButton.addEventListener('click', function() {
//     alert("button clicked!")
//     setTimeout(function(){
//         myMessage.innerText = 'This is a message in the DOM!'
//     }, 3000)
// });

clearMessageButton.addEventListener('click', function() {
    // alert("button clicked!")
    myMessage.innerText = ''
});

theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
    }
});

myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
    // myMessage.classList.remove('darkmode')
});


const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];

for(let i=0;i<fruits.length;i++){
    // get fruits from the list
    const fruit = fruits[i];
    
    // create a new li element
    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
};

addFruitButton.addEventListener('click', function() {
    const li = document.createElement('li');
    li.innerText = fruitInput.value;
    fruitList.appendChild(li);
})