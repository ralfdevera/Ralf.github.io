// Get the necessary elements
var product = document.getElementById("product");
var price1 = document.getElementById("price1");
var product2 = document.getElementById("product2");
var price2 = document.getElementById("price2");
var qty1 = document.getElementById("qty1");
var qty2 = document.getElementById("qty2");
var cart = document.getElementById("cart");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

// Function to add an order
function addOrder() {
  if (qty1.value > 0) {
    cart.value += qty1.value + " x " + product.textContent + " @ " + price1.textContent + " = " + (parseFloat(qty1.value) * parseFloat(price1.textContent)) + "\n";
  }
  if (qty2.value > 0) {
    cart.value += qty2.value + " x " + product2.textContent + " @ " + price2.textContent + " = " + (parseFloat(qty2.value) * parseFloat(price2.textContent)) + "\n";
  }
}

// Add event listeners to the quantity input fields
qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);

// Function to calculate the total and change
function calculateTotal() {
  var totalAmount = 0;
  var orders = cart.value.split("\n");
  for (var i = 0; i < orders.length; i++) {
    var order = orders[i].trim();
    if (order) {
      var parts = order.split(" @ ");
      var quantity = parseInt(parts[0]);
      var price = parseFloat(parts[1]);
      totalAmount += quantity * price;
    }
  }
  total.textContent = "Total: $" + totalAmount.toFixed(2);
}

// Calculate the change
function calculateChange() {
  var changeAmount = cash.value - totalAmount;
  change.textContent = "Change: $" + changeAmount.toFixed(2);
}

// Add event listener to the cash input field
cash.addEventListener("input", calculateTotal);
cash.addEventListener("input", calculateChange);

// Initialize the cart and total
cart.value = "";
total.textContent = "";
change.textContent = "";
