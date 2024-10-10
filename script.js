document.addEventListener("DOMContentLoaded", function() {
// Newsletter
// Add an event listener to the subscribe button
document.getElementById("subscribe-button").addEventListener("click", () => {
  // Display the alert window
  alert("Thank you for subscribing.");
});



// Gallery Page
// Initialize an empty cart array
let cart = [];

// Add an event listener to the view cart button
document.getElementById("view-cart-button").addEventListener("click", () => {
    if (cart.length > 0) {
      // Display the alert window
      alert("Items in cart: " + cart.join(", "));
    } else {
      // Display the alert window
      alert("No items in cart.");
    }
  });


  // Add an event listener to the add to cart buttons
  document.addEventListener("click", function(event) {
    if (event.target.classList.contains("add-to-cart-button")) {
        // Get the specific product value
        const value = event.target.getAttribute("value");
        // Add the item to the cart
        cart.push(value);
        // Display the alert window
        alert("Item added to the cart");
        console.log(cart);  
    }
});


// Add an event listener to the clear cart button
document.getElementById("clear-cart-button").addEventListener("click", () => {
  if (cart.length > 0) {
    // Clear the cart
    cart = [];
    // Display the alert window
    alert("Cart cleared");
  } else {
    // Display the alert window
    alert("No items to clear.");
  }
});

// Add an event listener to the process order button
document.getElementById("process-order-button").addEventListener("click", () => {
  if (cart.length > 0) {
    // Display the alert window
    alert("Thank you for your order");
  } else {
    // Display the alert window
    alert("Cart is empty.");
  }
});

// About Page
// Add an event listener to the submit button
document.getElementById("submit-button").addEventListener("click", () => {
    // Display the alert window
    try {
    alert("Thank you for your message."); } catch (error) {
        console.log("Error: " + error);
    }
  });

});

