
function calculateTotal() {
  // Get the values from input fields
  const petrolCost = parseFloat(document.getElementById('petrolCost').value);
  const litersPurchased = parseFloat(document.getElementById('litersPurchased').value);
  
  // Calculate total cost
  const totalCost = petrolCost * litersPurchased;
  
  // Display the total cost
  document.getElementById('totalCost').innerText = `Total Cost: ${totalCost.toFixed(2)} AED`;
}
