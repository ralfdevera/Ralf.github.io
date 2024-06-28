<script>
    let orders = [];
    
    function addToCart(cellphoneId) {
        const price = parseInt(document.getElementById("price" + cellphoneId).innerText);
        const quantity = parseInt(document.getElementById("quantity" + cellphoneId).value);
        const total = price * quantity;
        
        // Check if quantity is valid
        if (!isNaN(quantity) && quantity > 0) {
            orders = orders.filter(order => order.name !== "Brand " + cellphoneId); // Remove existing order if any
            orders.push({ name: "Brand " + cellphoneId, price: total, quantity: quantity });
        }
        
        updateOrders();
        updateTotalPrice();
    }
    
    function updateOrders() {
        const orderList = document.getElementById("orderList");
        orderList.innerHTML = "";
        
        orders.forEach(order => {
            const li = document.createElement("li");
            li.textContent = `${order.quantity} x ${order.name} - $${order.price}`;
            orderList.appendChild(li);
        });
    }
    
    function updateTotalPrice() {
        const totalPrice = orders.reduce((acc, order) => acc + order.price, 0);
        document.getElementById("totalPrice").innerText = totalPrice;
    }
    
    function calculateChange() {
        const totalPrice = parseInt(document.getElementById("totalPrice").innerText);
        const cash = parseInt(document.getElementById("cash").value);
        const change = cash - totalPrice;
        
        document.getElementById("change").innerText = `Change: $${change}`;
    }
    
    function gcashTransfer() {
        alert("Please transfer the total amount to the provided GCash number.");
    }
    
    function payMayaTransfer() {
        alert("Please transfer the total amount using PayMaya.");
    }
</script>
