let cart = [];

function addToCart(name, price) {
  let found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].quantity += 1;
      found = true;
      break;
    }
  }
  // kind of like a dictionary addition
  if (!found) {
    cart.push({ name: name, price: price, quantity: 1 });
  }

  updateCart();
}

function removeFromCart(name) {
  let newCart = [];
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name !== name) {
      newCart.push(cart[i]);
    }
  }
  cart = newCart;
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  let cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    total += item.price * item.quantity;

    let li = document.createElement("li");
    li.innerHTML = item.name + " x" + item.quantity + " - $" + (item.price * item.quantity).toFixed(2) +
      " <button onclick=\"removeFromCart('" + item.name + "')\">x</button>";
    cartItems.appendChild(li);
  }

  cartTotal.textContent = "Total: $" + total.toFixed(2);
}
