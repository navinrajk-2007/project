// Register User
function registerUser() {
  let user = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Registration Successful!");
  window.location.href = "index.html";
}

// User Login
function loginUser() {
  let saved = JSON.parse(localStorage.getItem("user"));
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  if (saved && email === saved.email && pass === saved.password) {
    window.location.href = "user-dashboard.html";
  } else {
    alert("Incorrect Email or Password!");
  }
}

// Add to Cart
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item Added to Cart!");
}

// Load Cart Items
function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let ul = document.getElementById("cartList");

  cart.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    ul.appendChild(li);
  });
}
