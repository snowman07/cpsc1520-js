// Enter JavaScript for the exercise here...

// let tableBody = document.querySelector(".transactions tbody");
// let transactionForm = document.querySelector("form");

// transactionForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let transactionForm = event.target;
//     let newTransaction = transactionForm.elements["description"].value;

//     //reset the value
//     transactionForm.elements["description"].value = "";
//     //create

//     let tr = document.createElement("tr");
//     let tdDesc
// })
//=======================

//let tableBody = document.querySelector(".transactions tbody");
const transactionForm = document.querySelector("form");

transactionForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const description = e.currentTarget.elements.description.value;
    if(description == "") {
        //console.log("Should not be blank!");
        document.querySelector(".error").innerHTML = "Description must not be empty";
        // description == "";
        // document.querySelector(".error") == "";
    }


    const type = e.currentTarget.elements.type.value;
    const currency = e.currentTarget.elements.currency.value;
    //add for the removeImage???

    // call function to add transactions
    createTransactionCell(description, type, currency);



})

function createTransactionCell(description, type, currency) { //add removeImage param here???
    let tableBody = document.querySelector(".transactions tbody");
    let tr = document.createElement("tr");
    let tdDescription = document.createElement("td");
    tdDescription.textContent = description;
    let tdType = document.createElement("td");
    tdType.textContent = type;
    let tdCurrency = document.createElement("td");
    tdCurrency.textContent = currency;
    //let tdRemove???


    //adding the transaction to the table 
    tr.appendChild(tdDescription);
    tr.appendChild(tdType);
    tr.appendChild(tdCurrency);
    //for removeImage
    tableBody.appendChild(tr);


}


