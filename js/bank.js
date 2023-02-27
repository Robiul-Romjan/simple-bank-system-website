// document.getElementById("deposite-btn").addEventListener("click", function () {
//     let depositeAmmount = document.getElementById("deposite-ammount");
//     let depositeText = depositeAmmount.innerText;
//     let depositeInput = document.getElementById("deposite-input");
//     let depositeValue = depositeInput.value;


//     const newDeposite = parseFloat(depositeText) + parseFloat(depositeValue);
//     depositeAmmount.innerText = newDeposite;
//     depositeInput.value = "";

//     let balanceTotal = document.getElementById("balance-total");
//     let balanceText = balanceTotal.innerText;
//     const newTotalBalance = parseFloat(balanceText) + parseFloat(depositeValue);
//     balanceTotal.innerText = newTotalBalance;
// });

// document.getElementById("withdraw-btn").addEventListener("click", function () {

//     let withdrawInput = document.getElementById("withdraw-input");
//     let withdrawValueString = withdrawInput.value;
//     let withdrawValue = parseFloat(withdrawValueString);

//     let withdrawAmmount = document.getElementById("withdraw-ammount");
//     let withdrawTextString = withdrawAmmount.innerText;
//     let withdrawText = parseFloat(withdrawTextString);

//     let balanceTotal = document.getElementById("balance-total");
//     let balanceTextString = balanceTotal.innerText;
//     let balanceText = parseFloat(balanceTextString);
    
//     withdrawInput.value = "";
//     if (withdrawValue > balanceText) {
//         alert("no money")
//         return;
//     }

//     // jamelar step
//     const newWithdraw = withdrawText + withdrawValue;
//     withdrawAmmount.innerText = newWithdraw;

//     const newTotalBalance = balanceText - withdrawValue;
//     balanceTotal.innerText = newTotalBalance;

// });


document.getElementById('deposite-btn').addEventListener("click", function(){
  const depositeResult =  getElementById("deposite-ammount") + getInputById("deposite-input");
  document.getElementById("deposite-ammount").innerText = depositeResult;

  const depositeBalanceResult = getInputById('deposite-input') + getElementById("balance-total");
  document.getElementById("balance-total").innerText = depositeBalanceResult;
});

document.getElementById('withdraw-btn').addEventListener("click", function(){
  const withdrawResult =  getElementById("withdraw-ammount") + getInputById("withdraw-input");
  document.getElementById("withdraw-ammount").innerText = withdrawResult;

  const withdrawBalanceResult =  getElementById("balance-total") - getInputById('withdraw-input');
  document.getElementById("balance-total").innerText = withdrawBalanceResult;
});


// my text editor section-----------------------------
let areaField = document.getElementById("text-area");

document.getElementById("bold").addEventListener("click", function(){
    areaField.style.fontWeight = "bold";
});

document.getElementById("italic").addEventListener("click", function(){
    areaField.style.fontStyle = "italic";
});

document.getElementById("underline").addEventListener("click", function(){
    areaField.style.textDecoration = "underline";
});

document.getElementById("left").addEventListener("click", function(){
    areaField.style.textAlign = "left";
});

document.getElementById("center").addEventListener("click", function(){
    areaField.style.textAlign = "center";
});

document.getElementById("right").addEventListener("click", function(){
    areaField.style.textAlign = "right";
});


document.getElementById("font-size").addEventListener("change", function(){
   let size = document.getElementById("font-size");
   let getSize = size.value;
   areaField.style.fontSize = `${getSize}px`;
});

document.getElementById("color").addEventListener("input", function(){
    let color = document.getElementById("color").value;
    areaField.style.color = `${color}`;
});




const category="pen";
 const performer = category+"-teller";
 console.log(performer);