let count = 0;
let difficultyCheck;
//basic button functions
function add() {
  count += 1;
}

function check() {
  console.log(count);
}

function final() {
  alert(`The final count is ${count} \n Goodbye`);
  //   return (count = 0);
  location.reload();
}

function getNumber() {
  let num = document.getElementById('number').value;
  return (count = 0 + Number(num));
}

function checkDifficulty() {
  console.log(difficultyCheck);
}

// checks to see which radio is selected for difficulty
// saves selection to difficulty variable
function isChecked() {
  if (document.getElementById('easy').checked === true) {
    return (difficultyCheck = getRandomNumber(5, 10));
  } else if (document.getElementById('medium').checked === true) {
    return (difficultyCheck = getRandomNumber(3, 15));
  } else if (document.getElementById('hard').checked === true) {
    return (difficultyCheck = getRandomNumber(1, 25));
  }
}

//modal functions

function openModal() {
  modal.style.display = 'block';
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

function closeModal() {
  modal.style.display = 'none';
}
//random number generator function

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//timer function for how long the game runs

function startTimer() {
  setTimeout(() => {
    console.log(count);
  }, difficultyCheck * 1000);
}
