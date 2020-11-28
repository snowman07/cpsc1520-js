// Enter JavaScript for the exercise here...

let tableBody = document.querySelector(".transactions tbody");
const transactionForm = document.querySelector("form");

transactionForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const description = e.currentTarget.elements.description.value;
    const type = e.currentTarget.elements.type.value;
    const currency = e.currentTarget.elements.currency.value;

    //validation for blank description
    if(description == "") {
        if ((type != "debit") || (type != "credit")) {
            document.querySelector(".error").innerHTML = "Type must not be credit or debit";  
        } 
        document.querySelector(".error").innerHTML = "Description must not be empty";
    } else {
        createTransactionCell(description, type, currency); 
        let error = document.querySelector(".error");
        error.innerHTML = "";
    }

    //reset the value
    transactionForm.elements["description"].value = "";
    transactionForm.elements["type"].value = "";
    transactionForm.elements["currency"].value = "";
})

function createTransactionCell(description, type, currency) { 
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

    tableBody.appendChild(tr);
}

//TO DELETE A ROW
tableBody.addEventListener("click", function (e) {
    //console.log(e.target.parentNode.outerHTML);
    if (e.target.classList.contains("tools")) { // I know there's better way to do this
        //select the parent
        let toolsParentNode = e.target.parentNode;
        //confirmation message here
        if(confirm("Press OK to delete the row, otherwise, press Cancel")) {
            //remove the parent
            toolsParentNode.remove();
        }
    }
})

