let count = 0;
console.log(count);
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
