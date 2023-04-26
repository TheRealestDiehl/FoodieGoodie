$(function(){
    $("#navi").load("./navbar.html");
    $("#checklist").load("./checklist.html",function(){

      var images = document.getElementsByTagName('img');
      var images = document.getElementsByClassName("card-img-top");
      images[0].src = "./src/public/meat/beef.png";
      images[1].src = "./src/public/fruits/strawberry.jpeg";
      images[2].src = "./src/public/vegetables/spinach.jpeg";
  
      var meat_name  = document.getElementsByClassName("card-title");
      meat_name[0].childNodes[0].nodeValue = "Beef";
      meat_name[1].childNodes[0].nodeValue = "Strawberry";
      meat_name[2].childNodes[0].nodeValue = "Spinach";
  
  
      var textsss = document.getElementsByClassName("side_1");
      textsss[0].childNodes[0].nodeValue = "$9.99/lb";
      textsss[1].childNodes[0].nodeValue = "$5.29/lb";
      textsss[2].childNodes[0].nodeValue = "$3.19";
      
      // var customize = document.querySelectorAll(".dropdown");
      // customize.forEach(function (custo) {
      //   custo.remove();
      // });
    });

//For the Food boxes on the checkout page
    $(document).on('input', '#myInput', function() {
      var query = $(this).val().toLowerCase();
      $('.card-title').each(function() {
        var text = $(this).text().toLowerCase();
        if (text.indexOf(query) === -1) {
          $(this).closest('.contains').hide();
        } else {
          $(this).closest('.contains').show();
        }
      });
    }); 
  });






const orderDataJson = localStorage.getItem("items");
const orderData = JSON.parse(orderDataJson);

const orderSummaryDiv = document.getElementById("order-summary");
const totalPriceDiv = document.getElementById("total-price");
// Clear any existing content
orderSummaryDiv.innerHTML = "";
totalPriceDiv.innerHTML = "";

// Create a new table element to display the order data
const table = document.createElement("table");

// Create the table header row
const headerRow = document.createElement("tr");
const cardTitleHeader = document.createElement("th");
cardTitleHeader.innerText = "Card Title";
const side1Header = document.createElement("th");
side1Header.innerText = "Price";
const customizeHeader = document.createElement("th");
customizeHeader.innerText = "Size";
const quantityHeader = document.createElement("th");
quantityHeader.innerText = "No of Items";
const totalPriceHeader = document.createElement("th");
totalPriceHeader.innerText = "Total Price";
headerRow.appendChild(cardTitleHeader);
headerRow.appendChild(side1Header);
headerRow.appendChild(customizeHeader);
headerRow.appendChild(quantityHeader);
headerRow.appendChild(totalPriceHeader);
table.appendChild(headerRow);

// Initialize total price sum to 0
let totalPriceSum = 0;

// Loop through the orderData array and add each item to the table
orderData.forEach((item) => {
  const row = document.createElement("tr");
  const cardTitleCell = document.createElement("td");
  cardTitleCell.innerText = item.cardTitle;
  const side1Cell = document.createElement("td");
  side1Cell.innerText = item.side1;
  const customizeCell = document.createElement("td");
  customizeCell.innerText = item.customize;
  const quantityCell = document.createElement("td");
  quantityCell.innerText = item.quantity;

  // Calculate the total price of the item
  const price = parseFloat(item.side1.substring(1));
  const quantity = parseFloat(item.quantity);
  const totalPrice = price * quantity;

  // Add the total price to the sum
  totalPriceSum += totalPrice;

  const totalPriceCell = document.createElement("td");
  totalPriceCell.innerText = "$" + totalPrice.toFixed(2);

  const deleteCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    // Remove the item from the orderData array
    const index = orderData.indexOf(item);
    if (index > -1) {
      orderData.splice(index, 1);
    }
    // Update localStorage
    localStorage.setItem("items", JSON.stringify(orderData));
    // Remove the row from the table
    row.remove();
    // Recalculate the total price sum and update the total price div
    totalPriceSum -= totalPrice;
    totalPriceDiv.innerText = "Total price: $" + totalPriceSum.toFixed(2);
  });
  deleteCell.appendChild(deleteButton);

  row.appendChild(cardTitleCell);
  row.appendChild(side1Cell);
  row.appendChild(customizeCell);
  row.appendChild(quantityCell);
  row.appendChild(totalPriceCell);
  row.appendChild(deleteCell);
  table.appendChild(row);
});

// Add the table to the order summary div
orderSummaryDiv.appendChild(table);

// Display the total price in the total price div
totalPriceDiv.innerText = "Total price: $" + totalPriceSum.toFixed(2);
