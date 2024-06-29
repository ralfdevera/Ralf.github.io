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

}

document.getElementById("calculate-change").addEventListener("click", function() {

});

function updateCart() {

}

updateCart();
