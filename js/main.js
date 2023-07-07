let Form = document.getElementById("form"):
let Name = document.getElementById("name").value;
let Select = document.getElementById("select");
let CardContainer = document.getElementById("cardContainer");

function Generate() {
  let nameP= document.createElement("p");
  nameP.textContent = "" + Name;

  CardContainer.appendChild(nameP);
  
};
