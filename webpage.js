let count = 0;
let selectedDifficulty;
// let modal = document.getElementById('modal');

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

// checks to see which radio is selected for difficulty
// saves selection to difficulty variable
function isChecked() {
  let difficultyCheck;
  if (document.getElementById('easy').checked === true) {
    console.log('easy');
    difficultyCheck = 'E';
  } else if (document.getElementById('medium').checked === true) {
    console.log('medium');
    difficultyCheck = 'M';
  } else if (document.getElementById('hard').checked === true) {
    console.log('hard');
    difficultyCheck = 'H';
  }
  return (selectedDifficulty = difficultyCheck);
}

//modal functions

function openModal() {
  document.getElementById('modal').classList.remove('modal');
}
