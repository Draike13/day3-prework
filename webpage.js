let count = 0;
console.log(count);
function add() {
  count += 1;
}

function check() {
  console.log(count);
}
function final() {
  alert(count);
  return (count = 0);
}
