//Matthew Reinardy

//Obtaining elements using DOM structure
// "Open Account" button
var openChecking = document.getElementById("openChecking");
//Open acct button, initial deposit, and date input field
var checkingForm = document.getElementById("checkingForm");
//Main information
var checkingDiv = document.getElementById("checkingAccount");
//Form with deposits and withdraws
var checkingOpened = document.getElementById("checkingOpened");
//Close account button
var closeChecking = document.getElementById("closeChecking");
//Table for transactions
var checkingTable = document.getElementById("checkingTable");
//Deposit button
var checkingDepositButton = document.getElementById("checkingDepositButton");
//Deposit amount
var checkingDepositAmount = document.getElementById("checkingDepositAmount");
//Withdraw button
var checkingWithdrawButton = document.getElementById("checkingWithdrawButton");
//Withdraw amount
var checkingWithdrawAmount = document.getElementById("checkingWithdrawAmount");
//"CLOSED ACCOUNT" text in yellow
var checkingClosedAlert = document.getElementById("checkingClosed");
//Date table header
var dateHeaderChecking = document.getElementById("dateHeader_checking");
//Description table header
var descriptionHeaderChecking = document.getElementById(
  "descriptionHeader_checking"
);
//Amount table header
var amountHeaderChecking = document.getElementById("amountHeader_checking");
//Balance table header
var balanceHeaderChecking = document.getElementById("balanceHeader_checking");

//Same as above, just different accounts so I will leave out the comments
var openSaving = document.getElementById("openSaving");
var savingsForm = document.getElementById("savingsForm");
var savingDiv = document.getElementById("savingsAccount");
var savingsOpened = document.getElementById("savingsOpened");
var closeSavings = document.getElementById("closeSavings");
var savingsTable = document.getElementById("savingsTable");
var savingsDepositButton = document.getElementById("savingsDepositButton");
var savingsDepositAmount = document.getElementById("savingsDepositAmount");
var savingsWithdrawButton = document.getElementById("savingsWithdrawButton");
var savingsWithdrawAmount = document.getElementById("savingsWithdrawAmount");
var savingsClosedAlert = document.getElementById("savingsClosed");
var dateHeaderSavings = document.getElementById("dateHeader_savings");
var descriptionHeaderSavings = document.getElementById(
  "descriptionHeader_savings"
);
var amountHeaderSavings = document.getElementById("amountHeader_savings");
var balanceHeaderSavings = document.getElementById("balanceHeader_savings");

var openMutualFund = document.getElementById("openMutualFund");
var mutualFundForm = document.getElementById("mutualFundForm");
var mutualFundDiv = document.getElementById("mutualFundAccount");
var mutualFundOpened = document.getElementById("mutualFundOpened");
var closeMutualFund = document.getElementById("closeMutual");
var mutualTable = document.getElementById("mutualFundTable");
var mutualDepositButton = document.getElementById("mutualDepositButton");
var mutualDepositAmount = document.getElementById("mutualDepositAmount");
var mutualWithdrawButton = document.getElementById("mutualWithdrawButton");
var mutualWithdrawAmount = document.getElementById("mutualWithdrawAmount");
var mutualClosedAlert = document.getElementById("mutualClosed");
var dateHeaderMutual = document.getElementById("dateHeader_mutual");
var descriptionHeaderMutual = document.getElementById(
  "descriptionHeader_mutual"
);
var amountHeaderMutual = document.getElementById("amountHeader_mutual");
var balanceHeaderMutual = document.getElementById("balanceHeader_mutual");

//Images
var defaultImg = document.getElementsByClassName("defaultImg");

/* I have been going back and forth on wether I should just have all
of this into one event listener being that there is some repetitive code. 
I decided on three separate ones as it allows me to debugg easier and the single
event listener would be very large. You will notice later that I use a switch
technique to lessen down on the repetiveness of my code*/

var timerStartTime;
var checkingAccountOpen = false;
var savingsAccountOpen = false;
var mutualFundAccountOpen = false;

var totalCheckingBalance = 0;
//Event listener for checking account with validation
openChecking.addEventListener("click", function () {
  /* Validation for the initial deposit and if the user has selected
  a valid date*/
  var checkingDepositValue = document.getElementById("checkingDeposit");
  var checkingDateValue = document.getElementById("checkingDate");
  var validCheckingNum = false;
  var validCheckingDate = false;
  var checkingDate = new Date(checkingDateValue.value);
  timerStartTime = Date.now();

  /*If valid num, I used a num input field so the Nan should not be an issue,
  but I put it in there just to be safe */
  if (checkingDepositValue.value <= 0 || checkingDepositValue.value == NaN) {
    alert(
      "Please enter in a valid initial deposit amount for the checking account"
    );
  } else {
    validCheckingNum = true;
  }

  //Valid date, used what I had from Assignment 9
  if (isNaN(checkingDate)) {
    alert("Please enter in a valid date (mm/dd/yyyy).");
  } else {
    validCheckingDate = true;
  }

  //If both are valid, proceed on
  if (validCheckingNum && validCheckingDate) {
    checkingForm.classList.add("hide");
    defaultImg[0].classList.add("hide");
    checkingDiv.style.height = "715px";
    checkingOpened.classList.remove("hide");
    closeChecking.classList.remove("hide");
    checkingTable.classList.remove("hide");
    totalCheckingBalance = Number(checkingDepositValue.value);
    startAnnualInterestTimer();
    checkingAccountOpen = true;

    //Generate the new table row
    var newRow = generateTableRow(
      checkingDateValue.value,
      "Open Account",
      checkingDepositValue.value,
      //No need for a total just yet as the initial deposit will always be the total
      checkingDepositValue.value
    );
    //Append the new row to the table.
    checkingTable.appendChild(newRow);
  }
});

var totalSavingsBalance = 0;
//Event listener for savings account with validation
openSaving.addEventListener("click", function () {
  var savingsDepositValue = document.getElementById("savingsDeposit");
  var savingsDateValue = document.getElementById("savingsDate");
  var validSavingsNum = false;
  var validSavingsDate = false;
  var savingsDate = new Date(savingsDateValue.value);
  timerStartTime = Date.now();

  /*If valid num, I used a num input field so the Nan should not be an issue,
  but I put it in there just to be safe */
  if (savingsDepositValue.value <= 0 || savingsDepositValue.value == NaN) {
    alert(
      "Please enter in a valid initial deposit amount for the savings account"
    );
  } else {
    validSavingsNum = true;
  }

  //Valid date, used what I had from Assignment 9
  if (isNaN(savingsDate)) {
    alert("Please enter in a valid date (mm/dd/yyyy).");
  } else {
    validSavingsDate = true;
  }
  if (validSavingsNum && validSavingsDate) {
    savingsForm.classList.add("hide");
    defaultImg[1].classList.add("hide");
    savingDiv.style.height = "715px";
    savingsOpened.classList.remove("hide");
    closeSavings.classList.remove("hide");
    savingsTable.classList.remove("hide");
    totalSavingsBalance = Number(savingsDepositValue.value);
    startAnnualInterestTimer();
    savingsAccountOpen = true;

    var newRow = generateTableRow(
      savingsDateValue.value,
      "Open Account",
      savingsDepositValue.value,
      savingsDepositValue.value
    );
    savingsTable.appendChild(newRow);
  }
});

var totalMutualFundBalance = 0;
//Event listener for mutual fund account with validation
openMutualFund.addEventListener("click", function () {
  var mutualDepositValue = document.getElementById("mutualFundDeposit");
  var mutualDateValue = document.getElementById("mutualFundDate");
  var validMutualNum = false;
  var validMutualDate = false;
  var mutualDate = new Date(mutualDateValue.value);
  timerStartTime = Date.now();

  /*If valid num, I used a num input field so the Nan should not be an issue,
  but I put it in there just to be safe */
  if (mutualDepositValue.value <= 0 || mutualDepositValue.value == NaN) {
    alert(
      "Please enter in a valid initial deposit amount for the mutual fund account"
    );
  } else {
    validMutualNum = true;
  }

  //Valid date, used what I had from Assignment 9
  if (isNaN(mutualDate)) {
    alert("Please enter in a valid date (mm/dd/yyyy).");
  } else {
    validMutualDate = true;
  }

  if (validMutualNum && validMutualDate) {
    mutualFundForm.classList.add("hide");
    defaultImg[2].classList.add("hide");
    mutualFundDiv.style.height = "715px";
    mutualFundOpened.classList.remove("hide");
    closeMutualFund.classList.remove("hide");
    mutualTable.classList.remove("hide");
    totalMutualFundBalance = Number(mutualDepositValue.value);
    startAnnualInterestTimer();
    mutualFundAccountOpen = true;

    var newRow = generateTableRow(
      mutualDateValue.value,
      "Initial Deposit",
      mutualDepositValue.value,
      mutualDepositValue.value
    );
    mutualTable.appendChild(newRow);
  }
});

//Function for creating table rows
function generateTableRow(date, description, amount, balance) {
  var row = document.createElement("tr");

  var dateCell = document.createElement("td");
  dateCell.textContent = date;
  row.appendChild(dateCell);

  var descriptionCell = document.createElement("td");
  descriptionCell.textContent = description;
  row.appendChild(descriptionCell);

  /* I have this if statement to put the "-" in front of when money is taken out,
  I tried sending the "-" through with the transaction type, which would cause things
  like "$-40" and it was annoying me that the $ was before the -*/
  var amountCell = document.createElement("td");
  if (description === "Withdrawal" || description === "Account Closed") {
    // If it's a withdrawal, add "-" before the amount
    amountCell.textContent = "-$" + amount;
  } else {
    amountCell.textContent = "$" + amount;
  }
  row.appendChild(amountCell);

  var balanceCell = document.createElement("td");
  balanceCell.textContent = "$" + balance;
  row.appendChild(balanceCell);

  return row;
}

/* Function to start the timer. I re-watched the video that you explained 
how timers work for the photo viewer and I am going to do a similar functionality
to how that works. Once the user opens the account, the timer is going to start. Every
10 sec this function is going to call another to calculate the interest and then 
generate a row into the table.*/

// Function to start the timer
function startAnnualInterestTimer() {
  // Start the timer
  setTimeout(function () {
    //Obtain interest from either user or default amount
    generateInterest();
    //Start timer for next cycle
    startAnnualInterestTimer();
  }, 10000);
}

//Function for obtaining interest payments, getting from user, and adding to total
function generateInterest() {
  // Checking Account
  /* I had to add these booleans in here becuase the interst would trigger for every account even
  if you just opened one*/
  if (checkingAccountOpen) {
    var checkingInterestRate = Number(
      document.getElementById("checkingInterestRate").value
    );
    var checkingInterest = totalCheckingBalance * (checkingInterestRate / 100);
    checkingInterest = Math.ceil(checkingInterest * 100) / 100;
    //add interest to the balance
    totalCheckingBalance += checkingInterest;
    //Send the interest payment to the table
    var newRow = generateTableRow(
      getTransactionDate(),
      "Interest Payment (" + checkingInterestRate + "%)",
      checkingInterest.toFixed(2),
      totalCheckingBalance.toFixed(2)
    );
    checkingTable.appendChild(newRow);
  }

  // Savings Account
  if (savingsAccountOpen) {
    var savingsInterestRate = Number(
      document.getElementById("savingsInterestRate").value
    );
    var savingsInterest = totalSavingsBalance * (savingsInterestRate / 100);
    savingsInterest = Math.ceil(savingsInterest * 100) / 100;
    totalSavingsBalance += savingsInterest;
    var newRow = generateTableRow(
      getTransactionDate(),
      "Interest Payment (" + savingsInterestRate + "%)",
      savingsInterest.toFixed(2),
      totalSavingsBalance.toFixed(2)
    );
    savingsTable.appendChild(newRow);
  }

  // Mutual Fund Account
  if (mutualFundAccountOpen) {
    var mutualFundInterestRate = Number(
      document.getElementById("mutualFundInterestRate").value
    );
    var mutualFundInterest =
      totalMutualFundBalance * (mutualFundInterestRate / 100);
    mutualFundInterest = Math.ceil(mutualFundInterest * 100) / 100;
    totalMutualFundBalance += mutualFundInterest;
    var newRow = generateTableRow(
      getTransactionDate(),
      "Interest Payment (" + mutualFundInterestRate + "%)",
      mutualFundInterest.toFixed(2),
      totalMutualFundBalance.toFixed(2)
    );
    mutualTable.appendChild(newRow);
  }
}

/*Event listeners for deposit and withdraw buttons. I am going to create
two functions because the functionality is the same for all deposits and 
withdraws, just different accounts. */
checkingDepositButton.addEventListener("click", function () {
  deposit("checking");
});

checkingWithdrawButton.addEventListener("click", function () {
  withdraw("checking");
});

savingsDepositButton.addEventListener("click", function () {
  deposit("savings");
});

savingsWithdrawButton.addEventListener("click", function () {
  withdraw("savings");
});

mutualDepositButton.addEventListener("click", function () {
  deposit("mutualFund");
});

mutualWithdrawButton.addEventListener("click", function () {
  withdraw("mutualFund");
});

function deposit(accountType) {
  var depositAmountInput;
  var accountBalance;
  var accountTable;
  var initialDeposit;

  var transactionDate = getTransactionDate();

  /*I am using this approach of using a switch case to essentially funnel in
  all of the different types of withdraw or deposits.*/

  /*You may also know that I have been using "Number", which the reason for that
  is when I initially did not have it, it was causing me some errors when it came
  to adding the numbers. This way, we can assure that all of input is in the correct
  format*/

  /*I had to obtain the initial deposit by doing a second DOM selector, which allows
  me to grab the fresh initial deposit so we can work off of that for the total*/

  switch (accountType) {
    case "checking":
      depositAmountInput = checkingDepositAmount;
      accountBalance = totalCheckingBalance;
      accountTable = checkingTable;
      initialDeposit = Number(document.getElementById("checkingDeposit").value);
      break;
    case "savings":
      depositAmountInput = savingsDepositAmount;
      accountBalance = totalSavingsBalance;
      accountTable = savingsTable;
      initialDeposit = Number(document.getElementById("savingsDeposit").value);
      break;
    case "mutualFund":
      depositAmountInput = mutualDepositAmount;
      accountBalance = totalMutualFundBalance;
      accountTable = mutualTable;
      initialDeposit = Number(
        document.getElementById("mutualFundDeposit").value
      );
      break;
  }

  var depositAmount = Number(depositAmountInput.value);

  //Validation for deposit amount, same as above when opening account
  if (isNaN(depositAmount) || depositAmount <= 0) {
    alert("Please enter a valid deposit amount.");
    return;
  }

  //Adding the deposit amount to the balance (this is not the actual total of acct.)
  accountBalance += depositAmount;

  //Generating table row for deposit
  var newRow = generateTableRow(
    transactionDate.toLocaleDateString(),
    "Deposit",
    depositAmount,
    accountBalance
  );
  accountTable.appendChild(newRow);

  /*Clearing the deposit amount, I initially did not have this and the deposits
  were stacking on top of each other which was a problem*/
  depositAmountInput.value = "";

  //Adding the account balance to the new total
  switch (accountType) {
    case "checking":
      totalCheckingBalance = accountBalance;
      break;
    case "savings":
      totalSavingsBalance = accountBalance;
      break;
    case "mutualFund":
      totalMutualFundBalance = accountBalance;
      break;
  }

  //Storing the balance since we also use it in withdraw and interest section
  updateTotalBalance();
}

function withdraw(accountType) {
  var withdrawAmountInput;
  var accountBalance;
  var accountTable;
  var initialDeposit;

  var transactionDate = getTransactionDate();

  //Same as deposit, funneling the 3 accounts together
  switch (accountType) {
    case "checking":
      withdrawAmountInput = checkingWithdrawAmount;
      accountBalance = totalCheckingBalance;
      accountTable = checkingTable;
      initialDeposit = Number(document.getElementById("checkingDeposit").value);
      break;
    case "savings":
      withdrawAmountInput = savingsWithdrawAmount;
      accountBalance = totalSavingsBalance;
      accountTable = savingsTable;
      initialDeposit = Number(document.getElementById("savingsDeposit").value);
      break;
    case "mutualFund":
      withdrawAmountInput = mutualWithdrawAmount;
      accountBalance = totalMutualFundBalance;
      accountTable = mutualTable;
      initialDeposit = Number(
        document.getElementById("mutualFundDeposit").value
      );
      break;
  }

  //Obtain the actual withdraw amount
  var withdrawAmount = Number(withdrawAmountInput.value);

  // Check for a valid number, also we need to check if they have enough
  if (
    !isNaN(withdrawAmount) &&
    withdrawAmount > 0 &&
    withdrawAmount <= accountBalance
  ) {
    // Update the account balance
    accountBalance -= withdrawAmount;

    // Add the withdrawal table
    var newRow = generateTableRow(
      transactionDate.toLocaleDateString(),
      "Withdrawal",
      withdrawAmount,
      accountBalance
    );
    accountTable.appendChild(newRow);

    // Clear the withdraw amount
    withdrawAmountInput.value = "";

    // Update the total balance
    switch (accountType) {
      case "checking":
        totalCheckingBalance = accountBalance;
        break;
      case "savings":
        totalSavingsBalance = accountBalance;
        break;
      case "mutualFund":
        totalMutualFundBalance = accountBalance;
        break;
    }

    // Update the total balance after taking the money out
    updateTotalBalance();
  } else {
    //Alert if did not meet validation
    alert("Please enter a valid withdrawal amount.");
  }
}

function updateTotalBalance() {
  // Update the balances
  var totalChecking = totalCheckingBalance;
  var totalSavings = totalSavingsBalance;
  var totalMutualFund = totalMutualFundBalance;
}

function getTransactionDate() {
  // Get the current time
  var currentTime = Date.now();

  // Calculate percentage
  var elapsedTime = currentTime - timerStartTime;

  // Calculate the percentage of time elapsed from the 10 seconds
  var percentageElapsed = (elapsedTime / (10 * 1000)) * 100;

  // Ms in year
  var millisecondsInYear = 365 * 24 * 60 * 60 * 1000;

  // Ms into year
  var millisecondsIntoYear = millisecondsInYear * (percentageElapsed / 100);

  // Find the transaction date
  var transactionDate = new Date(currentTime - millisecondsIntoYear);

  return transactionDate;
}

function getTransactionDate() {
  return new Date();
}

closeChecking.addEventListener("click", function () {
  closeAccount("checking");
});

closeSavings.addEventListener("click", function () {
  closeAccount("savings");
});

closeMutualFund.addEventListener("click", function () {
  closeAccount("mutualFund");
});

function closeAccount(accountType) {
  var accountTable;
  var accountBalance;

  //Hiding and adding "closed account" after closing
  switch (accountType) {
    case "checking":
      accountTable = checkingTable;
      accountBalance = totalCheckingBalance;
      checkingForm.classList.add("hide");
      checkingOpened.classList.add("hide");
      closeChecking.classList.add("hide");
      checkingClosedAlert.classList.remove("hide");
      alert("Checking account has been closed.");
      checkingAccountOpen = false;
      break;
    case "savings":
      accountTable = savingsTable;
      accountBalance = totalSavingsBalance;
      savingsForm.classList.add("hide");
      savingsOpened.classList.add("hide");
      closeSavings.classList.add("hide");
      savingsClosedAlert.classList.remove("hide");
      alert("Savings account has been closed.");
      savingsAccountOpen = false;
      break;
    case "mutualFund":
      accountTable = mutualTable;
      accountBalance = totalMutualFundBalance;
      mutualFundForm.classList.add("hide");
      mutualFundOpened.classList.add("hide");
      closeMutualFund.classList.add("hide");
      mutualClosedAlert.classList.remove("hide");
      alert("Mutual fund account has been closed.");
      mutualFundAccountOpen = false;
      break;
  }

  // Withdraw all funds from the account
  var transactionDate = getTransactionDate();
  var finalWithdrawal = accountBalance;
  accountBalance = 0;
  totalCheckingBalance = 0;
  totalSavingsBalance = 0;
  totalMutualFundBalance = 0;

  // Update the table with final withdrawal
  var newRow = generateTableRow(
    transactionDate.toLocaleDateString(),
    "Account Closed",
    finalWithdrawal,
    accountBalance
  );
  accountTable.appendChild(newRow);

  // Update total balance
  updateTotalBalance();
}

// Event listeners for Checking Account table headings
dateHeaderChecking.addEventListener("click", function () {
  sortTableRows(checkingTable, 0);
});

descriptionHeaderChecking.addEventListener("click", function () {
  sortTableRows(checkingTable, 1);
});

amountHeaderChecking.addEventListener("click", function () {
  sortTableRows(checkingTable, 2);
});

balanceHeaderChecking.addEventListener("click", function () {
  sortTableRows(checkingTable, 3);
});

// Event listeners for Savings Account table headings
dateHeaderSavings.addEventListener("click", function () {
  sortTableRows(savingsTable, 0);
});

descriptionHeaderSavings.addEventListener("click", function () {
  sortTableRows(savingsTable, 1);
});

amountHeaderSavings.addEventListener("click", function () {
  sortTableRows(savingsTable, 2);
});

balanceHeaderSavings.addEventListener("click", function () {
  sortTableRows(savingsTable, 3);
});

// Event listeners for Mutual Fund Account table headings
dateHeaderMutual.addEventListener("click", function () {
  sortTableRows(mutualTable, 0);
});

descriptionHeaderMutual.addEventListener("click", function () {
  sortTableRows(mutualTable, 1);
});

amountHeaderMutual.addEventListener("click", function () {
  sortTableRows(mutualTable, 2);
});

balanceHeaderMutual.addEventListener("click", function () {
  sortTableRows(mutualTable, 3);
});

var sortingOrder = "asc";

function sortTableRows(table, columnIndex) {
  var rows = table.querySelectorAll("tr");
  var rowsArray = [];

  // Convert to array
  for (var i = 0; i < rows.length; i++) {
    rowsArray.push(rows[i]);
  }

  // Remove the header row, I found this technique in the book
  rowsArray.shift();

  // Sort the rows based on the column values
  rowsArray.sort(function (rowA, rowB) {
    //Make sure all content is lowercase
    var valueA = rowA.children[columnIndex].textContent.toLowerCase();
    var valueB = rowB.children[columnIndex].textContent.toLowerCase();

    // Toggle sorting order

    /*I tried using the a - b and b - a approach for sorting these,
    but it would never seem to work. I did some more digging on the JS
    documentation you showed us on sorting and I found this "localecompare" which
    is used alongside the sort method we learned about*/
    if (sortingOrder === "asc") {
      return valueA.localeCompare(valueB);
    } else {
      return valueB.localeCompare(valueA);
    }
  });

  // Remake the table with newly sorted table
  rowsArray.forEach(function (row) {
    table.appendChild(row);
  });

  // change sorting type for next click
  if (sortingOrder === "asc") {
    sortingOrder = "desc";
  } else {
    sortingOrder = "asc";
  }
}

/*I would just like to thank you Mr. Galbari for everything you have taught me this
year and I truly appreciate all of the time and effort you spend personally grading and
giving amazing feedback for your students. You make coding fun and I am really looking forward
to next school year!

This project was my favorite of the year, and it definetly brought along its challenges. 
I learnt the importance of taking a break from your code and coming back to it later when 
you are fresh. It was also very helpful working alongside Bruno, as we spent multiple hours
at the Cannon falls library working out bugs.*/
