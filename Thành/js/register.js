let register = document.getElementById("register-form");
register.addEventListener("submit", function (event) {
  console.log("Đăng kí")
  event.preventDefault(); //// Ngăn sự kiện reload mặc định của trình duyệt.

  let lowerCaseLetter = /[a-z]/g;
  let upperCaseLetter = /[A-Z]/g;
  let numbers = /[0-9]/g;

  // in ra email và pass người dùng nhập được nhé
  const data = {
    email: register.email.value.trim(),
    password: register.password.value.trim(),
  }

  if (data.email.length == 0 && data.password.length == 0) {
    alert("Please input your email & password");
  }
  else if (data.password.length < 8) {
    alert("Password must be at least 8 characters");
  }
  else if (!data.password.match(lowerCaseLetter)) {
    alert("Password must be contain a lowercase letter");
  }
  else if (!data.password.match(upperCaseLetter)) {
    alert("Password must be contain a uppercase letter");
  }
  else if (!data.password.match(numbers)) {
    alert("Password must be contain a number or special character");
  }
  else {
    // Xử lý với LocalStorage
    if (localStorage.users) {
      // Kiểm tra nếu trên localStorage đã có khóa: users
      let users = JSON.parse(localStorage.users);

      let dem = 0
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === data.email) {
          dem++;
          alert("Please input another email");
        }
      }
      // Kiểm tra biến dem nếu dem>0 => email này đã bị trùng lăp.
      if (dem == 0) {
        users.push(data);
        localStorage.setItem("users", JSON.stringify(users));
        location.replace("./login.html");
      }
    }
    else {
      localStorage.setItem("users", JSON.stringify(
        [data]
      ));
      location.replace("./login.html");
    }

  }
})