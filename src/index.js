// document.querySelector("#submit").addEventListener("input", function(event) {
//   document.getElementById("list").innerHTML += "Create New Task <br>";
//   event.preventDefault();
// }, false);



document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(`form`).addEventListener(`submit`, (e) => {
    e.preventDefault()
    console.log(e.target.text)
  })  

//   // your code here
});



//function suppressEvent(description) {
  //console.log(description)

//}