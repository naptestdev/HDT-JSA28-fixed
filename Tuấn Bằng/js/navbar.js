if (localStorage.getItem("currentUser")) {
  document.querySelector(".icons").innerHTML += /*html*/ `
    <a href="">
    <i class="fa-solid fa-phone"></i>
</a>
<a href="cart.html">
<i class="fa-solid fa-cart-shopping"></i>
</a>
      <img class="users-logo" src="https://api.dicebear.com/6.x/initials/svg?seed=${
        JSON.parse(localStorage.getItem("currentUser")).email
      }" />
      <div class="line"></div>
      <a href="javascript:;" onclick="logout()">
      <i class="fa-solid fa-right-from-bracket"></i>
    </a>
    `;
} else {
  document.querySelector(".icons").innerHTML += /*html*/ `
    <a href="">
    <i class="fa-solid fa-phone"></i>
</a>
<a href="">
<i class="fa-solid fa-cart-shopping"></i>
</a>
<a href="../html/welcome.html">
<i class="fa-solid fa-user"></i>
</a>
<div class="line"></div>
<a href="">
<i class="fa-solid fa-globe"></i>
</a>`;
}
const updateCartCount = () => {
  if (localStorage.getItem("cart")) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    document.getElementById("cart-count").innerText = cart.length;
  }
};

updateCartCount();

const logout = () => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("cart");
  location.reload();
};
