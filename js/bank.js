document.getElementById("deposite-btn").addEventListener("click", function () {
    let depositeAmmount = document.getElementById("deposite-ammount");
    let depositeText = depositeAmmount.innerText;
    let depositeInput = document.getElementById("deposite-input");
    let depositeValue = depositeInput.value;


    const newDeposite = parseFloat(depositeText) + parseFloat(depositeValue);
    depositeAmmount.innerText = newDeposite;
    depositeInput.value = "";

    let balanceTotal = document.getElementById("balance-total");
    let balanceText = balanceTotal.innerText;
    const newTotalBalance = parseFloat(balanceText) + parseFloat(depositeValue);
    balanceTotal.innerText = newTotalBalance;
});

document.getElementById("withdraw-btn").addEventListener("click", function () {

    let withdrawInput = document.getElementById("withdraw-input");
    let withdrawValueString = withdrawInput.value;
    let withdrawValue = parseFloat(withdrawValueString);

    let withdrawAmmount = document.getElementById("withdraw-ammount");
    let withdrawTextString = withdrawAmmount.innerText;
    let withdrawText = parseFloat(withdrawTextString);

    let balanceTotal = document.getElementById("balance-total");
    let balanceTextString = balanceTotal.innerText;
    let balanceText = parseFloat(balanceTextString);
    
    withdrawInput.value = "";
    if (withdrawValue > balanceText) {
        alert("no money")
        return;
    }

    // jamelar step
    const newWithdraw = withdrawText + withdrawValue;
    withdrawAmmount.innerText = newWithdraw;

    const newTotalBalance = balanceText - withdrawValue;
    balanceTotal.innerText = newTotalBalance;

});