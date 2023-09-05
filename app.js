let editDiv;
let insertIncome = () => {
    let iName = incomename.value;
    let iDate = incomedate.value;
    let iAmount = parseInt(incomeamount.value);

    itotal.innerHTML = parseInt(itotal.innerHTML) + iAmount;
    balance.innerHTML = parseInt(itotal.innerHTML) - parseInt(etotal.innerHTML);

    let eg = document.createElement("div");
    let e1 = document.createElement("div");
    let e2 = document.createElement("div");
    let e3 = document.createElement("div");
    let e4 = document.createElement("div");
    // let b1 = document.createElement("button");
    // let b2 = document.createElement("button");
    // b1.innerHTML = '<i class="bi bi-pencil-square "></i>';
    // b2.innerHTML = '<i class="bi bi-trash-fill "></i>';

    e4.innerHTML = '<button onclick="editIncome(this);"><i class="bi bi-pencil-square " ></i></button>';
    e4.innerHTML += '<button onclick="delIncome(this);"><i class="bi bi-trash-fill "></i></button>';
    // e4.appendChild(b1);
    // e4.appendChild(b2);
    e1.innerHTML = iName;
    e2.innerHTML = iDate;
    e3.innerHTML = iAmount;
    eg.setAttribute("class", "row data");

    incomediv.appendChild(eg);
    eg.appendChild(e1);
    eg.appendChild(e2);
    eg.appendChild(e3);
    eg.appendChild(e4);
    clrInupt();


}
let btnIncomeClick = () => {
    if (btnincome.innerHTML == "Insert Income") {
        insertIncome();
    } else {
        updateIncome();
    }
}

let btnExpenseClick = () => {
    if (btnexpense.innerHTML == "Insert Expense") {
        insertExpense();
    } else {
        updateExpense();
    }
}
let clrInupt = () => {
    incomename.value = "";
    incomeamount.value = "";
    incomedate.value = "";
    expensename.value = "";
    expenseamount.value = "";
    expensedate.value = "";
}
let insertExpense = () => {
    let eName = expensename.value;
    let eDate = expensedate.value;
    let eAmount = parseInt(expenseamount.value);

    etotal.innerHTML = parseInt(etotal.innerHTML) + eAmount;
    balance.innerHTML = parseInt(itotal.innerHTML) - parseInt(etotal.innerHTML);

    let eg = document.createElement("div");
    let e1 = document.createElement("div");
    let e2 = document.createElement("div");
    let e3 = document.createElement("div");
    let e4 = document.createElement("div");
    // let b1 = document.createElement("button");
    // let b2 = document.createElement("button");
    // b1.innerHTML = '<i class="bi bi-pencil-square "></i>';
    // b2.innerHTML = '<i class="bi bi-trash-fill "></i>';

    e4.innerHTML = '<button onclick="editExpense(this);"><i class="bi bi-pencil-square " ></i></button>';
    e4.innerHTML += '<button onclick="delExpense(this);"><i class="bi bi-trash-fill "></i></button>';

    e1.innerHTML = eName;
    e2.innerHTML = eDate;
    e3.innerHTML = eAmount;
    eg.setAttribute("class", "row data");

    expensediv.appendChild(eg);
    eg.appendChild(e1);
    eg.appendChild(e2);
    eg.appendChild(e3);
    eg.appendChild(e4);
    clrInupt();

}
let delIncome = (btn) => {
    let outDiv = btn.parentNode.parentNode;
    let arr = outDiv.children;
    let amt = +arr[2].innerHTML;
    let itvalue = +itotal.innerHTML;
    itvalue -= amt;
    itotal.innerHTML = itvalue;
    let b = +balance.innerHTML;
    b -= amt;
    balance.innerHTML = b;
    incomediv.removeChild(outDiv);
}
let editIncome = (btn) => {
    let outDiv = btn.parentNode.parentNode;
    let arr = outDiv.children;
    let n = arr[0].innerHTML;
    let d = arr[1].innerHTML;
    let amt = +arr[2].innerHTML;
    incomename.value = n;
    incomedate.type = 'text';
    incomedate.value = d;
    incomeamount.value = amt;
    btnincome.innerHTML = 'Update';
    editDiv = outDiv;
}
let updateIncome = () => {
    let name = incomename.value;
    let amt = +incomeamount.value;
    let d = incomedate.value;
    let arr = editDiv.children;
    let oldamt = +arr[2].innerHTML;
    let itvalue = +itotal.innerHTML;
    arr[0].innerHTML = name;
    arr[1].innerHTML = d;
    arr[2].innerHTML = amt;
    itvalue -= oldamt;
    itvalue += amt;
    itotal.innerHTML = itvalue;
    let b = +balance.innerHTML;
    b -= oldamt;
    b += amt;
    balance.innerHTML = b;
    btnincome.innerHTML = "Insert Income";
}


let delExpense = (btn) => {
    let outDiv = btn.parentNode.parentNode;
    let arr = outDiv.children;
    let amt = +arr[2].innerHTML;
    let etvalue = +etotal.innerHTML;
    etvalue -= amt;
    etotal.innerHTML = etvalue;
    let b = +balance.innerHTML;
    b += amt;
    balance.innerHTML = b;
    expensediv.removeChild(outDiv);
}
let editExpense = (btn) => {
    let outDiv = btn.parentNode.parentNode;
    let arr = outDiv.children;
    let n = arr[0].innerHTML;
    let d = arr[1].innerHTML;
    let amt = +arr[2].innerHTML;
    expensename.value = n;
    expensedate.type = 'text';
    expensedate.value = d;
    expenseamount.value = amt;
    btnexpense.innerHTML = 'Update';
    editDiv = outDiv;
}
let updateExpense = () => {
    let name = expensename.value;
    let amt = +expenseamount.value;
    let d = expensedate.value;
    let arr = editDiv.children;
    let oldamt = +arr[2].innerHTML;
    let etvalue = +etotal.innerHTML;
    arr[0].innerHTML = name;
    arr[1].innerHTML = d;
    arr[2].innerHTML = amt;
    etvalue -= oldamt;
    etvalue += amt;
    etotal.innerHTML = etvalue;
    let b = +balance.innerHTML;
    b += oldamt;
    b -= amt;
    balance.innerHTML = b;
    btnexpense.innerHTML = "Insert Expense";
}