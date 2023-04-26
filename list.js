

// var add_Order = document.querySelectorAll(".add_to_order");
//       add_Order.forEach(function(btn){
//         btn.addEventListener("click",function(event){ 
//           event.preventDefault();
//           if(confirm("Are you sure?")){
//             console.log("hahah");
//             var check = document.querySelectorAll(".card-title");
//             check.forEach(function(card_checks){
//               console.log(card_checks);
//             })
//           }
//         })
//       })

var select = document.querySelectorAll(".select");
select.forEach(function (selected) {
  selected.addEventListener('click', function (event) {
    event.preventDefault();

    var selected_elem = selected.parentElement.parentElement.parentElement.childNodes[1];

    selected_elem.innerText = selected.textContent;
  })
})

var custom_value = document.querySelectorAll("#quantity");
// console.log(custom_value[0]);
custom_value.forEach(function (cus_val) {
  cus_val.addEventListener('input', function () {
    var val = parseFloat(cus_val.value);
    if (val > 20) {
      cus_val.value = 20;
    } else if (val < 1) {
      cus_val.value = 1
    }
  })
})

// here
// select all "Add to Order" buttons
const addToOrderBtns = document.querySelectorAll(".add_to_order");

// add click event listener to each button
addToOrderBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault(); // prevent form submission

    // get details of the selected item
    const cardTitle = event.target.parentNode.querySelector(".card-title").textContent;
    // const side1 = event.target.parentNode.querySelector(".side_1").textContent;
    const side1Element = document.querySelector('.side_1');
    const priceString = side1Element.textContent.trim();
    const price = parseFloat(priceString.replace('$', ''));
    const side1 = "$" + String(price);
    // console.log(price); // will output 5.99 (assuming the price is $5.99)
    var customize = event.target.parentNode.querySelector(".customize").textContent;
    console.log(typeof customize);
    console.log(customize);
    if(customize != "Small" ||customize != "Medium" || customize != "Large"){
      console.log("its is customize");
      customize = "Small";
    }
    var quantity = event.target.parentNode.querySelector("#quantity").value;
    if(quantity == ""){
      quantity = "1";
    }
    

    // create an object to store the item details
    const item = {
      cardTitle,
      side1,
      customize,
      quantity
    };

    // get existing items from local storage (if any)
    const items = JSON.parse(localStorage.getItem("items")) || [];

    // add the new item to the array
    items.push(item);

    // store the updated array in local storage
    localStorage.setItem("items", JSON.stringify(items));

    // show a success message (you can replace this with your own code to show the success animation)
    const successMessage = document.createElement("div");
    successMessage.classList.add("success-message");
    successMessage.textContent = "Item added to order!";
    event.target.parentNode.appendChild(successMessage);


    // remove the success message after 3 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 3000);
  });
});


// // Convert the orderData array to a JSON string
// const orderDataJson = JSON.stringify(orderData);

// // Store the JSON string in localStorage
// localStorage.setItem("orderData", orderDataJson);

// localStorage.clear();