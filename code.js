console.log("testing");

// Assigning found tags to variables
//===================================

var wSavings = document.getElementById("withdraw-savings");
var dSavings = document.getElementById("deposit-savings");
var wCheque = document.getElementById("withdraw-cheque");
var dCheque = document.getElementById("deposit-cheque");
var inputSavings = document.getElementById("input-savings");
var inputCheque = document.getElementById("input-cheque");
var balanceSavings = document.getElementById("balance-savings");
var balanceCheque = document.getElementById("balance-cheque");

// Positive integer input check (called by HTML)
//===================================

var inputCheck = function () {
  if (Math.sign(parseFloat(inputSavings.value)) != 1) {
    alert("Please enter a positive number.");
  }
}

// Functions to add/sub input to savings
//===================================

var newDepSaving = function () {
  var inputAmount = parseFloat(inputSavings.value);
  var total = parseFloat(balanceSavings.innerHTML) + inputAmount;
  balanceSavings.innerHTML = total;
}

var newWithSaving = function () {
  if (parseFloat(inputSavings.value) <= parseFloat(balanceSavings.innerHTML)) {
    var inputAmount = parseFloat(inputSavings.value);
    var total = parseFloat(balanceSavings.innerHTML) - inputAmount;
    balanceSavings.innerHTML = total;
  } else if (parseFloat(balanceCheque.innerHTML) < parseFloat(inputSavings.value)) {
    console.log("You have no money!")
  } else {
    var inputAmount = parseFloat(inputSavings.value);
    var total = parseFloat(balanceCheque.innerHTML) - inputAmount + parseFloat(balanceSavings.innerHTML);
    balanceSavings.innerHTML = "0";
    balanceCheque.innerHTML = total;
  }
}

// Functions to add/sub input to cheque
//===================================

var newDepCheque = function () {
  var inputAmount = parseFloat(inputCheque.value);
  var total = parseFloat(balanceCheque.innerHTML) + inputAmount;
  balanceCheque.innerHTML = total;
}

var newWithCheque = function () {
  if (parseFloat(inputCheque.value) <= parseFloat(balanceCheque.innerHTML)) {
    var inputAmount = parseFloat(inputCheque.value);
    var total = parseFloat(balanceCheque.innerHTML) - inputAmount;
    balanceCheque.innerHTML = total;
  } else if (parseFloat(balanceSavings.innerHTML) < parseFloat(inputCheque.value)) {
    console.log("You have no money!")
  } else {
    var inputAmount = parseFloat(inputCheque.value);
    var total = parseFloat(balanceSavings.innerHTML) - inputAmount + parseFloat(balanceCheque.innerHTML);
    balanceCheque.innerHTML = "0";
    balanceSavings.innerHTML = total;
  }
}


// Listening to click events (Accounts not linked test)...
//===================================

dSavings.addEventListener("click",newDepSaving);
wSavings.addEventListener("click",newWithSaving);

dCheque.addEventListener("click",newDepCheque);
wCheque.addEventListener("click",newWithCheque);

// Linking the accounts (remapping buttons - not working):
//===================================

// function linkSavings () {
//   if (parseFloat(balanceSavings.innerHTML) >= 0) {
//     dSavings.addEventListener("click",newDepSaving);
//     wSavings.addEventListener("click",newWithSaving);
//   } else if (parseFloat(balanceSavings.innerHTML) < 0) {
//     dSavings.addEventListener("click",newDepSaving);
//     wSavings.addEventListener("click",newWithCheque);
//   }
// };
//
// function linkCheque () {
//   if (parseFloat(balanceCheque.innerHTML) >= 0 ) {
//     dCheque.addEventListener("click",newDepCheque);
//     wCheque.addEventListener("click",newWithCheque);
//   } else if (parseFloat(balanceCheque.innerHTML) < 0) {
//     dCheque.addEventListener("click",newDepCheque);
//     wCheque.addEventListener("click",newWithSavings);
//   }
// }
//
// linkSavings();
// linkCheque();

// Linking the accounts (added to newWithSaving and newWithCheque as a conditional):
//===================================

// var emptySavings = function () {
//   var inputAmount = parseFloat(inputSavings.value);
//   var total = parseFloat(balanceCheque.innerHTML) - inputAmount;
//   balanceCheque.innerHTML = total;
// }
//
// var emptyCheque = function () {
//   var inputAmount = parseFloat(inputCheque.value);
//   var total = parseFloat(balanceSavings.innerHTML) - inputAmount;
//   balanceSavings.innerHTML = total;
// }



// Notes - Validation & Structuring Code
//===================================
/*
Reduce the number of globals (use objects to store objects etc.):
-----------------------------
var accounts = {
  savings: {
    balance: 0,
    deposit: function(amount) {
      accounts.savings.balance += amount;
    },
    withdraw: function(amount) {
      if (amount <= accounts.savings.balance) {
        accounts.savings.balance -= amount;
        return true;
      } else {
        return false;
      }
    }
  },

  cheque: {
    balance: 0,
    deposit: function(amount) {
      accounts.cheque.balance += amount;
      }
  }

}

var depositBtn = document.querySelector("deposit-savings"); // Allows search like in CSS; can filter
var balance = document.querySelector("balance-savings");
var inputSavings = document.querySelector("input-savings");

var updateBalance = function () {
  balance-savings.HTML = "$" + accounts.savings.balance;
}

updateBalance();

depositBtn.addEventListener("click", function () {
  var amount = parseFloat(inputSavings.value);
  accounts.savings.deposit(amount);
  updateBalance();
  input.value = "";
});
*/
