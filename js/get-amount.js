document.getElementById('deposite-btn').addEventListener('click', function () {
    // get deposite input amount
    const depositeInput = document.getElementById('input-deposite');
    const NewdepositeAmoun = depositeInput.value;
    //set deposite amount 
    const totalDeposite = document.getElementById('total-deposite');
    const privusDepositeAmount = totalDeposite.innerText;
    // total deposite amount added
    const totalDepositeAmount = parseFloat(privusDepositeAmount) + parseFloat(NewdepositeAmoun);
    totalDeposite.innerText = totalDepositeAmount;
    // total totalBalance
    const totalBalance = document.getElementById('total-balance');
    const privuseTotalBalance = totalBalance.innerText;
    const nweTotalBalance = parseFloat(privuseTotalBalance) + parseFloat(NewdepositeAmoun);
    totalBalance.innerText = nweTotalBalance;
    // clare input filed
    depositeInput.value = '';
})
// widthdrow btn
document.getElementById('withdrow-btn').addEventListener('click', function () {
    // input withdrow
    const inputWithdrow = document.getElementById('input-withdrow');
    const newWithdrow = inputWithdrow.value;
    // total privus  withdrow
    const totalWithdrow = document.getElementById('total-withdrow');
    const privusWithdrow = totalWithdrow.innerText;
    // total new withdrow
    const totalNewWithdrow = parseFloat(privusWithdrow) + parseFloat(newWithdrow);
    // update total withdrow
    totalWithdrow.innerText = totalNewWithdrow;
    //calculate total balance
    const balanceTotal = document.getElementById('total-balance');
    const privusBanalce = balanceTotal.innerText;


    const totalNweBalance = parseFloat(privusBanalce) - parseFloat(newWithdrow);
    balanceTotal.innerText = totalNweBalance;
    // clear input filed
    inputWithdrow.value = '';




})