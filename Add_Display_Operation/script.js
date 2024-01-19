let users = [];

function addUser() {
  let template = users.map((user) => `<li>${user}</li>`).join("\n");
  document.querySelector("ul").innerHTML = template;
}

addUser();
let btnAdd = document.querySelector("button");
let input = document.querySelector("input");

btnAdd.addEventListener("click", () => {
  users.push(input.value);
  input.value = "";
  addUser();
});
