"use strict";
/////////////////////////////////////////////////
// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, 1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");
const selectBar = document.querySelector(".select_bar");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Login Function
let currentAccount, timer;

btnLogin.addEventListener("click", (e) => {
  // Prevent form from submitting
  e.preventDefault();
  selectBar.options[0].selected = true;
  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Start timeout function
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
    console.log(currentAccount);
  }
});
const startLogoutTimer = () => {
  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // in each call print the timer to the UI
    labelTimer.textContent = `${min}:${sec}`;

    // When timer reach to 0 it will logout the user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    // Decrease the timer by one
    time--;
  };
  // set timer
  let time = 300;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

// To display the user names
const createUserNames = (accs) => {
  accs.forEach((acc) => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUserNames(accounts);

// Updating UI Function
const updateUI = (acc) => {
  // Display Movements
  displayMovements(acc.movements);

  // Display Balance
  calcDisplayBalance(acc.movements);

  // Display Summary
  calcDisplaySummary(acc);
};

// To display the movements/Entries
const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}$</div>
  </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// To display the Total Balance
const calcDisplayBalance = (value) => {
  const total_amt = value.reduce((acc, mov) => acc + mov);
  currentAccount.balance = total_amt;
  labelBalance.textContent = `${total_amt}$`;
};

// To display the summary
const calcDisplaySummary = (acc) => {
  // Total income
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${income}$`;

  // Total outcome
  const outcome = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(outcome)}$`;

  // Total interest
  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}$`;
};

// To sort the movements
let sorted = false;
btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);

  sorted = !sorted;
});

// Deposit value function
const fiterDepo = () => {
  const filter_value = (currentAccount.sortedDeposits =
    currentAccount.movements.filter((mov) => mov > 0));
  calcDisplayBalance(filter_value);
};

// Withdrawal value function
const filterWithD = () => {
  const filter_value = (currentAccount.sortedWithdrawals =
    currentAccount.movements.filter((mov) => mov < 0));
  calcDisplayBalance(filter_value);
};

selectBar.addEventListener("change", (e) => {
  e.preventDefault();

  if (selectBar.value === "depo") {
    // Filtering Deposits value
    fiterDepo();
    displayMovements(currentAccount.sortedDeposits);
  } else if (selectBar.value === "withd") {
    // Filtering Withdrawals Value
    filterWithD();
    displayMovements(currentAccount.sortedWithdrawals);
  } else {
    // Displaying All Values
    updateUI(currentAccount);
  }
});

// Money Transfer
btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  const checkIf =
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance > amount &&
    receiverAcc?.userName !== currentAccount.userName;

  console.log(checkIf);
  if (checkIf) {
    // Doing The Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);

    // Reset the timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
  // Clearing The Transfer Fields
  inputTransferTo.value = inputTransferAmount.value = "";
});

// To grant the loan
btnLoan.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  const checkIf =
    amount > 0 && currentAccount.movements.some((mov) => mov >= amount * 0.1);
  if (checkIf) {
    setTimeout(() => {
      // Add Movement
      currentAccount.movements.push(amount);

      // Update the UI
      updateUI(currentAccount);
      // Reset the timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 2500);
  }
  inputLoanAmount.value = "";
});

// To close the Account
btnClose.addEventListener("click", (e) => {
  e.preventDefault();

  const checkIf =
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === Number(currentAccount.pin);

  if (checkIf) {
    const index = accounts.findIndex(
      (acc) => acc.userName === currentAccount.userName
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;

    // Set the Label
    labelWelcome.textContent = `Log in to get started`;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

// labelBalance.addEventListener("click", () => {
//   const movementUI = Array.from(
//     document.querySelectorAll(".movements__value"),
//     (el) => Number(el.textContent.replace("$", ""))
//   );
//   console.log(movementUI);
// });
