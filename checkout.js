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
      
      var customize = document.querySelectorAll(".dropdown");
      customize.forEach(function (custo) {
        custo.remove();
      });
    });

// Define a cart array to store the items
const cart = [];
// Function to handle adding an item to the cart
function addToCart(item) {
  // Add the item to the cart array
  cart.push(item);
  // Optional: Update UI or perform other actions after adding item to the cart
  console.log(`${item} added to order!`);
}
// Function to handle removing an item from the cart
function removeFromCart(item) {
  // Find the index of the item in the cart array
  const index = cart.indexOf(item);
  // If the item is found, remove it from the cart array
  if (index > -1) {
    cart.splice(index, 1);
    // Optional: Update UI or perform other actions after removing item from the cart
    console.log(`${item} removed from cart!`);
  }
}
// Example usage with an "Add to Cart" button
document.getElementById('add-to-cart-button').addEventListener('click', function() {
  const item = 'Example Item'; // Replace with actual item data
  addToCart(item);
});
document.getElementById('delete-from-cart-button').addEventListener('click', function() {
  const item = 'Example Item'; // Replace with actual item data
  removeFromCart(item);
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
