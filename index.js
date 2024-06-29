// Get elements from the HTML
const qty1Input = document.getElementById("qty1");
const qty2Input = document.getElementById("qty2");
const totalInput = document.getElementById("total");
const cashInput = document.getElementById("cash");
const changeInput = document.getElementById("change");

const price1 = 27000.00;
const price2 = 37000.00;

// Calculate total cost when quantity changes
qty1Input.addEventListener('input', calculateTotal);
qty2Input.addEventListener('input', calculateTotal);

function calculateTotal() {
    const qty1 = parseInt(qty1Input.value) || 0;
    const qty2 = parseInt(qty2Input.value) || 0;

    const totalCost = (qty1 * price1) + (qty2 * price2);
    totalInput.value = totalCost.toFixed(2);
}

// Calculate change when cash tendered changes
cashInput.addEventListener('input', calculateChange);

function calculateChange() {
    const totalCost = parseFloat(totalInput.value);
    const cashTendered = parseFloat(cashInput.value) || 0;

    const change = cashTendered - totalCost;
    changeInput.value = change.toFixed(2);
}
