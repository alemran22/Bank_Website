// step1:get the deposit button
document.getElementById("depositBtn").addEventListener("click", function () {
    // step2:get the deposit value and total deposit
    const depositInputElement = document.getElementById("depositInput");
    const depositInputString = depositInputElement.value;
    const depositInput = parseFloat(depositInputString);

    const totalDepositElement = document.getElementById("totalDeposit");
    const totalDepositString = totalDepositElement.innerText;
    const totalDeposit = parseFloat(totalDepositString);

    // step3:set the total deposit value
    const newTotalDeposit = totalDeposit + depositInput;
    totalDepositElement.innerText = newTotalDeposit;

    // step4:adjust the total Balance 
    const totalBalanceElement = document.getElementById("totalBalance");
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);
    const newTotalBalance = totalBalance + depositInput;
    totalBalanceElement.innerText = newTotalBalance;
    depositInputElement.value = "";
})