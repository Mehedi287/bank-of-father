//function for get input value
function getInputValue(idName) {
    const inputFiled = document.getElementById(idName);
    const nweAmount = inputFiled.value;
    inputFiled.value = '';
    return nweAmount;
}
//function for get pribus amount 
function getpreviusbalance(idname, inputAmount) {
    const totalDeposite = document.getElementById(idname);
    const privusAmount = totalDeposite.innerText;
    const totalAmount = parseFloat(privusAmount) + parseFloat(inputAmount);
    totalDeposite.innerText = totalAmount;
    return totalAmount;
}
//function for calculate total balance
function totalBalace(totalBalance, inputAmount, add) {
    const balance = document.getElementById(totalBalance);
    const privuseTotalBalance = balance.innerText;
    if (add == true) {
        balance.innerText = parseFloat(privuseTotalBalance) + parseFloat(inputAmount);
    }
    else {
        balance.innerText = parseFloat(privuseTotalBalance) - parseFloat(inputAmount);
    }
}
// clicked deposite btn 
document.getElementById('deposite-btn').addEventListener('click', function () {
    // get input deposite 
    const NewdepositeAmoun = getInputValue('input-deposite');
    // get totoal deposite 
    const privusDepositeAmount = getpreviusbalance('total-deposite', NewdepositeAmoun);
    //  get total balanc 
    const Balace = totalBalace('total-balance', NewdepositeAmoun, true);
})
// clicked  widthdrow btn
document.getElementById('withdrow-btn').addEventListener('click', function () {
    // get input withdrow
    const newWithdrow = getInputValue('input-withdrow')
    // get total withdrow 
    const kolu = getpreviusbalance('total-withdrow', newWithdrow);
    //total balance calculate
    const balance = totalBalace('total-balance', newWithdrow, false);
})