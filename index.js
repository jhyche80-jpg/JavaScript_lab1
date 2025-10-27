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





