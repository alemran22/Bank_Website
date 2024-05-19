// step1:get the deposit button
document.getElementById("depositBtn").addEventListener("click", function () {
    // step2:get the deposit value and total deposit
    const depositInput = getInputValueById("depositInput");
    // const depositInputString = depositInputElement.value;
    // const depositInput = parseFloat(depositInputString);

    const totalDeposit = getElementValueById("totalDeposit");
    // const totalDepositString = totalDepositElement.innerText;
    // const totalDeposit = parseFloat(totalDepositString);

    // step3:set the total deposit value
    const newTotalDeposit = totalDeposit + depositInput;
    setValue("totalDeposit", newTotalDeposit)
    // totalDepositElement.innerText = newTotalDeposit;

    // step4:adjust the total Balance 
    const totalBalance = getElementValueById("totalBalance");
    // const totalBalanceString = totalBalanceElement.innerText;
    // const totalBalance = parseFloat(totalBalanceString);
    const newTotalBalance = totalBalance + depositInput;
    setValue("totalBalance", newTotalBalance)
    // totalBalanceElement.innerText = newTotalBalance;
    // depositInputElement.value = "";
})