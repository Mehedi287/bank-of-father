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

document.getElementById('deposite-btn').addEventListener('click', function () {
    // get input deposite 
    const NewdepositeAmoun = getInputValue('input-deposite');
    // get totoal deposite 
    const privusDepositeAmount = getpreviusbalance('total-deposite', NewdepositeAmoun);
    //total depostie balance calculate
    const totalBalance = document.getElementById('total-balance');
    const privuseTotalBalance = totalBalance.innerText;
    const nweTotalBalance = parseFloat(privuseTotalBalance) + parseFloat(NewdepositeAmoun);
    totalBalance.innerText = nweTotalBalance;
})
// widthdrow btn
document.getElementById('withdrow-btn').addEventListener('click', function () {
    // get input withdrow
    const newWithdrow = getInputValue('input-withdrow')
    // get total withdrow 
    const kolu = getpreviusbalance('total-withdrow', newWithdrow);
    //total balance calculate
    const balanceTotal = document.getElementById('total-balance');
    const privusBanalce = balanceTotal.innerText;
    const totalNweBalance = parseFloat(privusBanalce) - parseFloat(newWithdrow);
    balanceTotal.innerText = totalNweBalance;
})