//mode is to decide what opperation is done on the two numbers//
let mode = 'none';
//get each button and creates events for them//
let addButton = document.getElementById('addition');
addButton.addEventListener('click', (event) => {
  mode = 'add';
  console.log(mode);
});

let subtractButton = document.getElementById('subtraction');
subtractButton.addEventListener('click', (event) => {
  mode = 'subtract';
  console.log(mode);
});

let multButton = document.getElementById('multiplication');
multButton.addEventListener('click', (event) => {
  mode = 'mulitply';
  console.log(mode);
});

let divideButton = document.getElementById('division');
divideButton.addEventListener('click', (event) => {
  mode = 'division';
  console.log(mode);
});

const r1Button = document.getElementById('r1-submit');
r1Button.addEventListener('click', (event) => {
  let first = r1Button.previousElementSibling.previousElementSibling.value;
  let second = r1Button.previousElementSibling.value;
  let newVal = Math.floor(Math.random() * (second - first) + first);
  let destination = r1Button.parentElement.previousElementSibling;
  destination.value = newVal;
  if(mode == 'division'){
    while(is_prime(destination.value) == true){
      destination.value = Math.floor(Math.random() * (second - first) + first); 
    }
  }
});

const r2Button = document.getElementById('r2-submit');
r2Button.addEventListener('click', (event) => {
  let first = r2Button.previousElementSibling.previousElementSibling.value;
  let second = r2Button.previousElementSibling.value;
  let newVal = Math.floor(Math.random() * (second - first) + first);
  let destination = r2Button.parentElement.previousElementSibling;
  destination.value = newVal;
  let rand1 = document.getElementById("first-number").value;
  if(rand1 != ""){
    if(mode == 'subtract'){
      while(rand1 < newVal){
        newVal = Math.floor(Math.random() * (second - first) + first);
        destination.value = newVal;
      }
    }
    if(mode == 'division'){
      while(rand1 % destination.value != 0){
        destination.value = Math.floor(Math.random() * (second - first) + first); 
        }
      }
    }
  });

function is_prime(n)
{
  if(n===1){
    return false;
  }
  else if(n===2){
    return true;
  }
  else{
    for(let x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;
  }
}














