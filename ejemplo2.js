function saludar(){
  let person = prompt("Please enter your name", "");

  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
    
    console.log("Hello " + person + "! How are you today?");
  }
}
