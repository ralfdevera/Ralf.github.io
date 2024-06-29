<script src="script.js"></script>

  <!-- script.js -->
  var cellphoneBrands = {
    "apple": {
      "iphone-13": {"price": 999, "description": "iPhone 13", "image": "iphone-13.jpg"}
    },
    "samsung": {
      "samsung-galaxy-s21": {"price": 799, "description": "Samsung Galaxy S21", "image": "samsung-galaxy-s21.jpg"}
    },
    "google": {
      "pixel-4a": {"price": 399, "description": "Pixel 4a", "image": "pixel-4a.jpg"}
    },
    "huawei": {
      "huawei-p30-pro": {"price": 699, "description": "Huawei P30 Pro", "image": "huawei-p30-pro.jpg"}
    }
  };

  var cart = [];
  var total = 0;

  document.getElementById("add-to-cart").addEventListener("click", function() {
    var brand = document.getElementById("brand").value;
    var model = document.getElementById("model").value;
    var quantity = parseInt(document.getElementById("quantity").value);
    var price = cellphoneBrands[brand][model]["price"];
    var description = cellphoneBrands[brand][model]["description"];
    var image = cellphoneBrands[brand][model]["image"];

    var order = {
      brand: brand,
      model: model,
      quantity: quantity,
      price: price,
      description: description,
      image: image
    };

    cart.push(order);
    updateCart();
  });

  function updateCart() {
    var ordersHTML = "";
    for (var i = 0; i < cart.length; i++) {
      ordersHTML += cart[i].brand + " " + cart[i].model + ": x" + cart[i].quantity + "\n";
    }
    document.getElementById("orders").innerHTML = ordersHTML;

    total = 0;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].quantity * cart[i].price;
    }
    document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2);

    // calculate change
    var cashAmount = parseFloat(document.getElementById("cash").value);
    var changeAmount = cashAmount - total;
    document.getElementById("change").innerHTML = "Change: $" + changeAmount.toFixed(2);
  }

  document.getElementById("calculate-change").addEventListener("click", function() {
    updateCart();
  });

</script>
