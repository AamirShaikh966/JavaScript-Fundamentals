// let users = ["aamir", "suraj"];

// function viewUser() {
//   let template = users
//     .map(
//       (user) =>
//         `<li>${user} <button onclick={btndel('${user}')}> Delete </button></li>`
//     )
//     .join("\t");
//   document.querySelector("ul").innerHTML = template;
// }

// function btndel(user) {
//   console.log(user);
//   let a = users.filter(function (element) {
//     return element !== user;
//   });
//   console.log(a);
// }
// viewUser();

// let btnAdd = document.querySelector("button");
// let input = document.querySelector("input");

// function adduser() {
//   // console.log("for adding");
//   users.push(input.value);
//   viewUser();
// }

// btnAdd.addEventListener("click", adduser);
