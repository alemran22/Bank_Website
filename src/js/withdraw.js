// step1:get the withdraw button
document.getElementById("withdrawBtn").addEventListener("click", function () {
    // step2:get the withdraw value and total withdraw

    const withdrawInput = getInputValueById("withdrawInput");
    // const withdrawInputString = withdrawInputElement.value;
    // const withdrawInput = parseFloat(withdrawInputString);

    const totalwithdraw = getElementValueById("totalwithdraw");
    // const totalwithdrawString = totalwithdrawElement.innerText;
    // const totalwithdraw = parseFloat(totalwithdrawString);

    // step3:set the total withdraw value
    const newTotalwithdraw = totalwithdraw + withdrawInput;
    // totalwithdrawElement.innerText = newTotalwithdraw;
    setValue("totalwithdraw", newTotalwithdraw);

    // step4:adjust the total Balance

    
    const totalBalance = getElementValueById("totalBalance");

    // const totalBalanceString = totalBalanceElement.innerText;
    // const totalBalance = parseFloat(totalBalanceString);
    const newTotalBalance = totalBalance - withdrawInput;
    setValue("totalBalance", newTotalBalance);
    // totalBalanceElement.innerText = newTotalBalance;


    // step5:reset input value
    // withdrawInput.value= "";
})