const qty1Input = document.getElementById("qty1");
const qty2Input = document.getElementById("qty2");
const totalInput = document.getElementById("total");
const cashInput = document.getElementById("cash");
const changeInput = document.getElementById("change");

const price1 = 27000.00;
const price2 = 37000.00;

function calculateTotal() {
    const qty1 = parseInt(qty1Input.value) || 0;
    const qty2 = parseInt(qty2Input.value) || 0;

    const totalCost = (qty1 * price1) + (qty2 * price2);
    totalInput.value = totalCost.toFixed(2);
}

function calculateChange() {
    const totalCost = parseFloat(totalInput.value);
    const cashTendered = parseFloat(cashInput.value) || 0;

    const change = cashTendered - totalCost;
    changeInput.value = change.toFixed(2);
}
