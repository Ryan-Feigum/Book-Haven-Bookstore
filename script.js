document.addEventListener("DOMContentLoaded", function() {


// Newsletter
// Select element with the id "subscribe-button"
var subscribeButton = document.getElementById("subscribe-button");
// Add an event listener to the subscribe button
subscribeButton.addEventListener("click", () => {
  // Display the alert window
  showMessage("Thank you for subscribing.");
});



// Gallery Page
// Initialize an empty cart array
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Select element with the id "view-cart-button"
var viewCartButton = document.getElementById("view-cart-button");
// Add an event listener to the view cart button
viewCartButton.addEventListener("click", () => {
    if (cart.length > 0) {
      // Display the alert window
      showMessage("Items in cart: " + cart.join(", "));
    } else {
      // Display the alert window
      showMessage("No items in cart.");
    }
  });

  // Select all elements with the class "add-to-cart-button"
  var addCartButton = document.querySelectorAll(".add-to-cart-button");

  // Loop through each button and add an event listener
  addCartButton.forEach((button) => {
    button.addEventListener("click", () => {
        // Get the specific product value
        const item = button.getAttribute("item");
        // Add the item to the cart
        cart.push(item);
        // Store in session storage
        sessionStorage.setItem("cart", JSON.stringify(cart));
        // Display the alert window
        showMessage("Item added to the cart: " + item);
        console.log(cart);  
    })
});

// Select element with the id "clear-cart-button"
var clearCartButton = document.getElementById("clear-cart-button");
// Add an event listener to the clear cart button
clearCartButton.addEventListener("click", () => {
  // Determine if the cart is empty
  if (cart.length > 0) {
    // Clear the cart
    cart = [];
    // Display the alert window
    showMessage("Cart cleared");
  } else {
    // Display the alert window
    showMessage("No items to clear.");
  }
});

// Select element with the id "process-order-button"
var processOrderButton = document.getElementById("process-order-button");
// Add an event listener to the process order button
processOrderButton.addEventListener("click", () => {
  // Determine if the cart is empty
  if (cart.length > 0) {
    // Display the alert window
    showMessage("Thank you for your order");
  } else {
    // Display the alert window
    showMessage("Cart is empty.");
  }
});

// About Page
// Select the form element
var customOrderButton = document.querySelector("form");
// Add an event listener to the submit button
customOrderButton.addEventListener("submit", () => {
  // Prevent default submit event page refresh
  preventDefault();  
  // Display the alert window
  try {
    showMessage("Thank you for your message."); 
  } catch (error) {
    console.log("Error: " + error);
  }
  });

  // Custom function in case of migration to different platform / alert deprecation
  function showMessage(message) {
    alert(message);
  }

});

