// step1:get the withdraw button
document.getElementById("withdrawBtn").addEventListener("click", function () {
    // step2:get the withdraw value and total withdraw

    const withdrawInputElement = document.getElementById("withdrawInput");
    const withdrawInputString = withdrawInputElement.value;
    const withdrawInput = parseFloat(withdrawInputString);

    const totalwithdrawElement = document.getElementById("totalwithdraw");
    const totalwithdrawString = totalwithdrawElement.innerText;
    const totalwithdraw = parseFloat(totalwithdrawString);

    // step3:set the total withdraw value
    const newTotalwithdraw = totalwithdraw + withdrawInput;
    totalwithdrawElement.innerText = newTotalwithdraw;

    // step4:adjust the total Balance 
    const totalBalanceElement = document.getElementById("totalBalance");
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);
    const newTotalBalance = totalBalance - withdrawInput;
    totalBalanceElement.innerText = newTotalBalance;
    // step5:reset input value
    withdrawInputElement.value = "";
})