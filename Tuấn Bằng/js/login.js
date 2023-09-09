let login = document.getElementById("login-form")
console.log(login)
login.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!localStorage.getItem("users")) {
        alert("Email hoặc mật khẩu sai");
      } else {
        let users = JSON.parse(localStorage.getItem("users"));
    
        let email = document.getElementById("email");
        let password = document.getElementById("password");
    
        let existingUser = users.find(
          (index) =>
            index.email === email.value.trim() &&
            index.password === password.value.trim()
        );
    
        if (existingUser) {
          localStorage.setItem("currentUser", JSON.stringify(existingUser));
    
          location.href = "../html/sales.html";
        } else {
          alert("Email or password is incorrect");
        }
      }
    });


