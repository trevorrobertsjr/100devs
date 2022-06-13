document.querySelector('#check').addEventListener('click', check)
// document.querySelector('#formy').addEventListener('submit', check)
document.querySelector('#day').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    check()
    e.preventDefault();
  }
});
function check() {

  const day = document.querySelector('#day').value.toLowerCase();
  console.log(day);

  //Conditionals go here
  if (day==="tuesday"|| day==="thursday") {
    document.querySelector('#placeToSee').innerText ="Class Day"

  } else if (day ==="saturday"|| day==="sunday") {
    document.querySelector('#placeToSee').innerText = "Weekend"

  } else {
    document.querySelector('#placeToSee').innerText ="Boring Day"
  }


}
