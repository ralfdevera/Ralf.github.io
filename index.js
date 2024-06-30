const items = document.querySelectorAll('.item');
const ordersTable = document.getElementById('orders');
const totalElement = document.getElementById('total');
const cashChangeElement = document.getElementById('cash-change');

let orders = [];

items.forEach((item) => {
    const quantityInput = item.querySelector('input');
    const priceElement = item.querySelector('#price');
    const addToCartButton = item.querySelector('#addToCart');

    quantityInput.addEventListener('input', () => {
        const quantity = parseInt(quantityInput.value);
        if (quantity > 0) {
            orders.push({
                item: item.querySelector('img').src,
                brand: item.querySelector('h2').textContent,
                quantity,
                price: parseFloat(priceElement.textContent)
            });
        }
    });

        addToCartButton.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value);
            if (quantity > 0) {
                const itemId = item.getAttribute('data-item-id');
                const itemDetails = {
                    item: item.querySelector('img').src,
                    brand: item.querySelector('h2').textContent,
                    quantity,
                    price: parseFloat(priceElement.textContent)
                };
                orders.push(itemDetails);

                // Append the item details to the orders container
                const ordersTable = document.getElementById('orders');
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${itemDetails.brand}</td>
                    <td>${itemDetails.quantity}</td>
                    <td>${itemDetails.price * itemDetails.quantity}</td>
                `;
                ordersTable.appendChild(newRow);

                quantityInput.value = '0';
            }
        });
    });
});

document.getElementById('calculate-total').addEventListener('click', () => {
    let subtotal = 0;
    orders.forEach((order) => {
        subtotal += order.price * order.quantity;
    });
    totalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;

    const cashValue = parseFloat(prompt("Enter cash:", ""));
    const changeValue = cashValue - subtotal;

    if (changeValue >= 0) {
        cashChangeElement.textContent = `Change: $${changeValue.toFixed(2)}`;
    } else {
        alert("Insufficient cash!");
    }
});
