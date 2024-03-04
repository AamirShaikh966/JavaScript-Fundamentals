"use strict";
// localStorage.clear();

let arr = JSON.parse(localStorage.getItem("object")) || [];

const btnAdd = document.querySelector(".add");
const addDiv = document.querySelector(".add_div");
const createFormDiv = document.querySelector(".create_form");
const btnCreate = document.querySelector(".create");
const uName = document.querySelector(".name");
const uAge = document.querySelector(".age");
const tableData = document.querySelector(".data_table");
const btnCancel = document.querySelector(".cancel");

const updateName = document.querySelector(".uname");
const updateAge = document.querySelector(".uage");
const updateDiv = document.querySelector(".update_form");
const btnUpdate = document.querySelector(".update");

btnAdd.addEventListener("click", () => {
  addDiv.style.display = "none";
  createFormDiv.style.display = "block";
});

btnCreate.addEventListener("click", (e) => {
  e.preventDefault();
  if (uName.value == "" || uAge.value == "" || uAge.value < 1) {
    alert("Please Enter Name");
    return false;
  }
  let sameName = arr.find(
    (rec) => rec.fullName.toLowerCase() == uName.value.toLowerCase()
  );
  if (sameName) return alert("Please enter unique name");

  let arrData = { fullName: uName.value, age: uAge.value };
  arr.push(arrData);
  localStorage.setItem("object", JSON.stringify(arr));
  displayData(arr);
});

const displayData = (arr) => {
  addDiv.style.display = "block";
  createFormDiv.style.display = "none";
  uName.value = "";
  uAge.value = "";

  let html = arr
    .map((record, i) => {
      return `<tr>
    <td>${i + 1}</td>
    <td>${record.fullName}</td>
    <td>${record.age}</td>
    <td>
      <button class="edit" onclick={editData(${i})}> Edit </button>
      <button class="delete" onclick={deleteData(${i})}> Delete </button>
    </td>
  </tr>`;
    })
    .join(" ");

  tableData.innerHTML = html;
};

displayData(arr);

const editData = (id) => {
  addDiv.style.display = "none";
  updateDiv.style.display = "block";

  updateName.id = id;
  updateName.value = arr[id].fullName;
  updateAge.value = arr[id].age;
};

const deleteData = (id) => {
  const popUp = confirm("Are your sure you want to delele this record ??");
  if (popUp === true) {
    arr = arr.filter((rec) => rec !== arr[id]);
    localStorage.setItem("object", JSON.stringify(arr));
    displayData(arr);
  }
};

btnUpdate.addEventListener("click", (e) => {
  addDiv.style.display = "block";
  updateDiv.style.display = "none";
});

btnCancel.addEventListener("click", (e) => {
  updateName.value = "";
  updateAge.value = "";
});

btnUpdate.addEventListener("click", () => {
  const id = document.querySelector(".uname").id;

  const fullName = updateName.value;
  const age = updateAge.value;

  const index = arr.findIndex((rec, index) => index == id);
  arr[index] = { fullName, age };
  // updateForm.style.display = "none";

  localStorage.setItem("object", JSON.stringify(arr));

  displayData(arr);
});

////////////////////////////////////////////////////////////

// const uname = document.querySelector(".name");
// const age = document.querySelector(".age");
// const btnadd = document.querySelector(".add");
// const addDiv = document.querySelector(".add_div");
// const btncreate = document.querySelector(".create");
// const createDiv = document.querySelector(".create_form");
// const updateForm = document.querySelector(".update_form");
// const btnCancel = document.querySelector(".cancel");
// const updateName = document.querySelector(".uname");
// const updateAge = document.querySelector(".uage");
// const tableData = document.querySelector(".data_table");
// const btnUpdate = document.querySelector(".update");
// const btnedit = document.querySelector(".edit");
// const btndlt = document.querySelector(".delete");
// let uId = 1;
// var usersData = [];

// const getTheLocalStorageData = () => {
//   return JSON.parse(localStorage.getItem("object"));
// };

// const showData = () => {
//   if (localStorage.getItem("object")) {
//     console.log(localStorage.getItem("object"), "Data Found");

//     // localStorage.setItem("object", JSON.stringify(usersData));
//     const data = getTheLocalStorageData();
//     // console.log(data);

//     let html = "";
//     data.map(
//       (record, i) =>
//         (html += `<tr>
//             <td>${i + 1}</td>
//             <td>${record.fullName}</td>
//             <td>${record.age}</td>
//             <td>
//               <button class="edit" onclick={edit(${record.id})}> Edit </button>
//               <button class="delete" onclick={delet(${
//                 record.id
//               })}> Delete </button>
//             </td>
//           </tr>`)
//     );
//     tableData.innerHTML = html;
//   } else {
//     usersData = localStorage.setItem("object", JSON.stringify(usersData));
//     console.log(usersData);
//   }
//   // console.log(JSON.stringify(usersData), "lll");
//   // usersData = localStorage.setItem("object", JSON.stringify(usersData)) ?? [
//   //   { id: 1, fullName: "Aamir", age: 12 },
//   // ];

//   // localStorage.setItem("object", JSON.stringify(usersData));
//   const data = getTheLocalStorageData();
//   // console.log(data);

// let html = "";
// data.map(
//   (record, i) =>
//     (html += `<tr>
//           <td>${i + 1}</td>
//           <td>${record.fullName}</td>
//           <td>${record.age}</td>
//           <td>
// <button class="edit"> Edit </button>;
// <button class="delete"> Delete </button>;
//           </td>
//         </tr>`)
// );
// tableData.innerHTML = html;
// };

// const edit = (id) => {
//   updateForm.style.display = "block";
//   createDiv.style.display = "none";

// const obj = usersData.find((rec) => rec.id === id);
// updateName.value = obj.fullName;
// updateAge.value = obj.age;
// document.querySelector(".id").value = obj.id;
// };

// const addData = () => {
//   uId++;

// Check name in existing objects using for loop
// for (let index = 0; index < usersData.length; index++) {
//   if (usersData[index].fullName.toLowerCase() === uname.value.toLowerCase()) {
//     return alert("Name already taken Enter unique Name");
//   }
// }

//   // Same thing using find method
//   let sameName = usersData.find(
//     (item) => item.fullName.toLowerCase() == uname.value.toLowerCase()
//   );

//   if (sameName) return alert("same name");

//   let newUsersData = {
//     id: uId,
//     fullName: uname.value,
//     age: age.value,
//   };
//   usersData.push(newUsersData);

//   createDiv.style.display = "none";
//   addDiv.style.display = "block";

//   showData();
// };

// const delet = (id) => {
//   const popUp = confirm("are you sure ?");
//   if (popUp === true) {
// usersData = usersData.filter((rec) => rec.id !== id);
//     showData();
//   }
// };
// btndlt.addEventListener("click", delet.bind(id));
