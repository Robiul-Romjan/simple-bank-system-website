document.getElementById("login-button").addEventListener("click", function(){
    let userEmail = document.getElementById("user-email");
    let email = userEmail.value;
    let userPassword = document.getElementById("user-password");
    let password = userPassword.value;
    console.log(email, password)

    if(email === "robiulromjan7@gmail.com" && password === '171010040'){
         window.location.href = "bank.html";
    }
    else{
        alert("Username or Password is Incorrect");
    }
});


