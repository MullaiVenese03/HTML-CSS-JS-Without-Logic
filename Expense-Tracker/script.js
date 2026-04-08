const totalAmount = document.getElementById("totalAmount");
const addTransaction = document.getElementById("addTransaction");
const transactionDate = document.getElementById("transactionDate");
const transactionAmount = document.getElementById("transactionAmount");
const transactionDescription = document.getElementById("transactionDescription");
const expenseRadio = document.getElementById("expenseRadio");
const budgetRadio = document.getElementById("budgetRadio");
const addFullTransaction = document.getElementById("addFullTransaction");
const transactions = document.getElementById("transactions");
const transactionList = document.getElementById("transactionList");
const transactionContainer = document.getElementById("transactionContainer");

let amount = 0;
totalAmount.textContent = `$${amount}`;

addTransaction.addEventListener("click", () => {
  transactionContainer.style.display = "block";
});

addFullTransaction.addEventListener("click", () => {
  if( transactionAmount.value === "" || transactionDate.value === "" || transactionDescription.value === "" || expenseRadio.checked === false && budgetRadio.checked === false ) {
    alert("Enter All Details of Transaction!");

  }
  else {
    transactionContainer.style.display = "none";

    let transDate = transactionDate.value;
    let transAmount = Number(transactionAmount.value);
    let transDescription = transactionDescription.value;
    let expRadio = expenseRadio.checked;
    let budRadio = budgetRadio.checked;
  
    let radioBtn = expRadio === true && budRadio === false ? "Expense" : "Budget";
  
    let createTr = document.createElement("tr");
    createTr.innerHTML = ` <td>${transDate}</td> <td>$ ${transAmount}</td> <td>${transDescription}</td> <td>${radioBtn}</td> <button onclick="deleteLists(event)" class="delete-btn">Delete</button> `;
  
    transactions.appendChild(createTr);
  
    transactionDate.value = "";
    transactionAmount.value = "";
    transactionDescription.value = "";
    expenseRadio.checked = false;
    budgetRadio.checked = false;
  
    if (expRadio == true) {
      amount = Number(amount - transAmount);
      totalAmount.textContent = `$${amount}`;
    } else {
      amount = Number(amount + transAmount);
      totalAmount.textContent = `$${amount}`;
    }

    if ( totalAmount.textContent.includes("-") ) {
      totalAmount.style.color = "#ff0000";
    }
    else {
      totalAmount.style.color = "#00e600";
    }

  }

});

function deleteLists(event) {
  event.target.parentNode.remove();
}