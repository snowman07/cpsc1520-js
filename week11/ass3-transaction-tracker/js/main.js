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

let tableBody = document.querySelector(".transactions tbody");
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
    //const currency = e.currentTarget.elements.currency.value;
    const currency = e.currentTarget.elements.currency.value;
    ////////////add for the removeImage???
    //const trashIcon = e.currentTarget.elements.trashIcon;

    // call function to add transactions
    createTransactionCell(description, type, currency); // , trashIcon ////////////add removeImg arg here

    //reset the value
    transactionForm.elements["description"].value = "";
    transactionForm.elements["type"].value = "";
    transactionForm.elements["currency"].value = "";

})

function createTransactionCell(description, type, currency) { /////////////add removeImage param here???
    let tableBody = document.querySelector(".transactions tbody");
    let tr = document.createElement("tr");
    
    //use to identify tr class="debit" or tr class="credit"
    if(type === "debit") {
        tr.setAttribute("class", "debit");
    } else if (type === "credit") {
        tr.setAttribute("class", "credit");
    }

    let tdDescription = document.createElement("td");
    tdDescription.textContent = description;
    let tdType = document.createElement("td");
    tdType.textContent = type;
    let tdCurrency = document.createElement("td");
    tdCurrency.textContent = "$" + currency;

    //createElement for trash icon
    let tdTrashIcon = document.createElement("td");
    let iTrashIcon = document.createElement("i");
    iTrashIcon.createTextNode= "\uD83D\uDDD1";

    // set appropriate attributes (setAttribute)
    tdCurrency.setAttribute("class", "amount");
    tdTrashIcon.setAttribute("class", "tools");
    iTrashIcon.setAttribute("class", "delete fa fa-trash-o");


    //adding the transaction to the table 
    tr.appendChild(tdDescription);
    tr.appendChild(tdType);
    tr.appendChild(tdCurrency);
    tr.appendChild(tdTrashIcon); //appendChild for tdTrashIcon
    tdTrashIcon.appendChild(iTrashIcon); //appendChild for iTrashIcon

    //tdCurrency.appendChild(getCurrency);
    //////////////for removeImage
    tableBody.appendChild(tr);

    //const s1 = '\u00E9' //é
}

tableBody.addEventListener("click", function (e) {
    // checkif the button has been clicked
    console.log(e.target.parentNode.outerHTML)
    if (e.target.classList.contains("delete")) {
        //select the parent
        let nameItemNode = e.target.parentNode;
        //remove the parent
        nameItemNode.remove();
    }
})


