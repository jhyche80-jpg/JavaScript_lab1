const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const subName = document.getElementById("btn1");
const fullName = document.getElementById("Greeting");

function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

subName.addEventListener("click", function () {
    const firstname = firstName.value.trim();
    const lastname = lastName.value.trim();

    if (firstname === "" || lastname === "") {
        alert("Invalid name input");
        return;
    }

    const first = cap(firstname);
    const last = cap(lastname);
    const fullGreet = `Hello ${first} ${last}!!!`;


    fullName.innerText = fullGreet;

})
const priceInput = document.getElementById("price");
const quantityInput = document.getElementById("Quantity");
const taxRateInput = document.getElementById("Taxrate");
const total = document.getElementById("Totalcost");
const subName2 = document.getElementById("btn2");

function calculateTotalCost(price, taxRate, quantity) {
    const totalCost = (price * quantity) * (1 + taxRate);
    return totalCost.toFixed(2);
}

subName2.addEventListener("click", function () {

    const price = priceInput.value.trim();
    const quantity = quantityInput.value.trim();
    const taxRate = taxRateInput.value.trim();


    if (
        price === "" || quantity === "" || taxRate === "" ||
        isNaN(price) || isNaN(quantity) || isNaN(taxRate)
    ) {
        alert("Please enter valid numeric values!");
        return;
    }


    const totalValue = calculateTotalCost(
        parseFloat(price),
        parseFloat(taxRate),
        parseFloat(quantity)
    );


    total.innerText = `${totalValue}`;
})
function checkEligibility(age, isEmployed) {
    if (age > 18 && isEmployed === true) {
        return " eligible"
    }
    if (age > 18 && isEmployed === false) {
        return " Conditionally eligible"

    }
    if (age <= 18 && age > 1) {
        return "Not eligible"
    }
    if (isNaN(age) || age <= 0) {
        return `Enter a valid number !`

    }
}

const ageinput = document.getElementById("age")
const yesbtn = document.getElementById("yes")
const nobtn = document.getElementById("no")
const choice = document.getElementById("check")

yesbtn.addEventListener("click", function () {
    const age = parseInt(ageinput.value.trim())


    const eligibile = checkEligibility(age, true)
    choice.innerText = `Results: ${eligibile}`

})
nobtn.addEventListener("click", function () {
    const age = parseInt(ageinput.value.trim())

    const eligibile = checkEligibility(age, false)
    choice.innerText = `Results: ${eligibile}`

})
const price2 = document.getElementById("price2");
const quantity2 = document.getElementById("Quantity2");
const taxRate2 = document.getElementById("Taxrate2");
const total2 = document.getElementById("Totalcost2");
const yes2 = document.getElementById("yes2");
const no2 = document.getElementById("no2");
const disDiv = document.getElementById("dis");


function calculateTotal(price, quantity, taxRate, discount = 0) {
    let totalCost = (price * quantity) * (1 + taxRate);
    if (discount > 0) {
        totalCost -= discount; 
    }
    return totalCost.toFixed(2);
}


yes2.addEventListener("click", function () {
    disDiv.innerHTML = `
      <input type="number" id="discountInput" placeholder="Enter discount amount">
      <button id="applyDiscount">Apply Discount</button>
    `;

    const applyDiscount = document.getElementById("applyDiscount");
    applyDiscount.addEventListener("click", function () {
        const price = parseFloat(price2.value);
        const quantity = parseFloat(quantity2.value);
        const taxRate = parseFloat(taxRate2.value);
        const discount = parseFloat(document.getElementById("discountInput").value);

        if (price === "" || quantity === "" || taxRate === "" || discount === "" ||
            isNaN(price) || isNaN(quantity) || isNaN(taxRate) || isNaN(discount)) {
            alert("⚠️ Please enter valid positive numbers!");
            return;
        }

        const totalValue = calculateTotal(price, quantity, taxRate, discount);
        total2.innerText = `$${totalValue}`;
    });
});


no2.addEventListener("click", function () {
    disDiv.innerHTML = "";

    const price = parseFloat(price2.value);
    const quantity = parseFloat(quantity2.value);
    const taxRate = parseFloat(taxRate2.value);

    if ([price, quantity, taxRate].some(v => isNaN(v) || v < 0)) {
        alert("⚠️ Please enter valid positive numbers!");
        return;
    }

    const totalValue = calculateTotal(price, quantity, taxRate);
    total2.innerText = `$${totalValue}`;
});

