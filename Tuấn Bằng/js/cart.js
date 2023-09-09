const displayCart = () => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  if (cart.length === 0) {
    document.getElementById("sale").innerHTML = /* html */ `
        <h4 class="empty-warning">Your cart is empty</h4>
      `;
  } else {
    document.getElementById("sale").innerHTML = /* html */ `
        <table>
          <tr>
            <th class="th2">Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          ${cart
            .map(
              (product) => /*html*/ `
              <tr>
                <td class="td1">
                  <div class="product-cell">
                    <img class="img" src="${product.image}" alt="" />
                    <p>${product.name}</p>
                  </div>
                </td>
                <td class="quantity-cell">
                  <button onclick="removeFromCart(${product.id});displayCart()">
                    -
                  </button>
                  <span>${product.quantity}</span>
                  <button onclick="addToCart(${product.id});displayCart()">
                    +
                  </button>
                </td>
                <td>${
                  Math.round(product.price * product.quantity * 100) / 100
                }</td>
              </tr>
            `
            )
            .join("")}
        </table>
        <h2>Total: $${cart.reduce(
          (acc, product) =>
            acc + Math.round(product.price * product.quantity * 100) / 100,
          0
        )}</h2>
      `;
  }
};

displayCart();
