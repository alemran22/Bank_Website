
// step1:get the LogIn Button
document.getElementById("logInBtn").addEventListener("click", function () {
    // step2:get the Email Field
    const inputMail = document.getElementById("inputMail").value;
    
    // step3:get the password field
    const inputPass = document.getElementById("inputPass").value;
    //step4 : 
    if (inputMail==="alemrangazi@gmail.com" && inputPass === "471986") {
        window.location.href = "dashboard.html";
    } else {
       alert("Invalid Email or Password")  
    }
    
})