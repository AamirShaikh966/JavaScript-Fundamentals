let users = [];

function viewUser() {
  let template = users
    .map(
      (user, index) =>
        `<li>${user} <button onclick={btndel(${index})}>  Delete </button> <button onclick={btnedt(${index})}>  Edit </button></li>`
    )
    .join("\t");

  document.querySelector("ul").innerHTML = template;
  clearform();
}
function btnedt(index) {
  let editedValue = prompt("Enter a value ");
  if (editedValue !== "") {
    users[index] = editedValue;
    viewUser();
  } else {
    console.log("Value");
    alert("Value can not be empty");
    viewUser();
  }
}

function btndel(index) {
  var popUp = confirm("Are You Sure...?");
  if (popUp === true) {
    users.splice(index, 1);
    console.log(index, "Here ....");
    console.log(users);
  }
  viewUser();
}

viewUser();

let btnAdd = document.querySelector("button");
let input = document.querySelector("input");

function addUser() {
  users.push(input.value);
  viewUser();
}
btnAdd.addEventListener("click", addUser);

// clr form
function clearform() {
  document.getElementById("fieldValue").value = "";
}
