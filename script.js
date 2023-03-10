function getName() {
  let name = prompt("What's your name?");
  document.getElementById("greeting").innerHTML = "Hello " + name;
}
