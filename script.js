
// Newsletter
// Get the subscribe button element
document.getElementById("subscribe-button").addEventListener('click', () => {
  // Display the alert window
  alert('Thank you for subscribing.');
});

// Initialize an empty cart array
let cart = [];

// Gallery Page

document.getElementById('view-cart-button').addEventListener('click', () => {
    if (cart.length > 0) {
      // Display the alert window
      alert('Items in cart:', cart);
    } else {
      // Display the alert window
      alert('No items in cart.');
    }
  });

// Get the add to cart buttons
document.getElementById("add-to-cart-button").addEventListener('click', () => {
    // Add the item to the cart
    cart.push(button.value);
    // Display the alert window
    alert('Item added to the cart');
  });


// Add an event listener to the clear cart button
document.getElementById('clear-cart-button').addEventListener('click', () => {
  if (cart.length > 0) {
    // Clear the cart
    cart = [];
    // Display the alert window
    alert('Cart cleared');
  } else {
    // Display the alert window
    alert('No items to clear.');
  }
});

// Add an event listener to the process order button
document.getElementById('process-order-button').addEventListener('click', () => {
  if (cart.length > 0) {
    // Process the order
    // (You can add your order processing logic here)
    // Display the alert window
    alert('Thank you for your order');
  } else {
    // Display the alert window
    alert('Cart is empty.');
  }
});


// About Page
// Add an event listener to the submit button
document.getElementById("submit-button").addEventListener('click', () => {
  // Display the alert window
  alert('Thank you for your message');
});