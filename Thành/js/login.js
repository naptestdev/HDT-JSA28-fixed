let login = document.getElementById("login-form");
login.addEventListener("submit", function (event) {
  event.preventDefault();

  // Lấy dữ liệu trên LS về;
  let users = JSON.parse(localStorage.getItem("users"));
  console.log("users: ", users);

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === login.email.value.trim()) {
      if (users[i].password === login.password.value.trim()) {
        alert("Login Success");

        localStorage.setItem("currentUser", login.email.value.trim());

        window.location.href = "./a/index.html";

        //để lại
        break;
      } else {
        alert("Wrong password");
      }
    }
  }
  if (users[users.length - 1].email != login.email.value.trim()) {
    alert("Wrong email");
  }
});
