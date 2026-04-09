// ===== Variables =====
let count = 0;
let recycle = 0;
let co2 = 0;
let hazard = 0;

// ===== Classification Function =====
function classify() {
  let input = document.getElementById("input").value.toLowerCase().trim();

  if (input === "") {
    alert("Please enter a waste item!");
    return;
  }

  let category = "";
  let bin = "";

  // ===== Smart Classification Logic =====
  if (input.includes("banana") || input.includes("food") || input.includes("vegetable")) {
    category = "Organic";
    bin = "Brown Bin";
  } 
  else if (input.includes("paper") || input.includes("newspaper") || input.includes("book")) {
    category = "Paper";
    bin = "Blue Bin";
  } 
  else if (input.includes("plastic") || input.includes("bottle") || input.includes("bag")) {
    category = "Plastic";
    bin = "Yellow Bin";
  } 
  else if (input.includes("glass") || input.includes("jar")) {
    category = "Glass";
    bin = "Green Bin";
  } 
  else if (input.includes("metal") || input.includes("can") || input.includes("tin")) {
    category = "Metal";
    bin = "Yellow Bin";
  } 
  else if (input.includes("battery") || input.includes("chemical") || input.includes("medicine")) {
    category = "Hazardous";
    bin = "Red Bin";
    hazard++;
  } 
  else {
    category = "Other Waste";
    bin = "General Bin";
  }

  // ===== Update Stats =====
  count++;
  recycle++;
  co2 += 0.7;

  document.getElementById("count").innerText = count;
  document.getElementById("recycle").innerText = recycle;
  document.getElementById("co2").innerText = co2.toFixed(1);
  document.getElementById("hazard").innerText = hazard;

  // ===== Add to Table =====
  let table = document.getElementById("tableData");
  let row = `
    <tr>
      <td>${input}</td>
      <td>${category}</td>
      <td>${bin}</td>
    </tr>
  `;
  table.innerHTML += row;

  // ===== Clear Input =====
  document.getElementById("input").value = "";
}

// ===== Enter Key Support =====
document.getElementById("input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    classify();
  }
});