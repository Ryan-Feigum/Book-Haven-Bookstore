document.addEventListener("DOMContentLoaded", () => {


  
// Newsletter ----------------------------------------------------

// Select element with the id "subscribe-button"
var subscribeButton = document.getElementById("subscribe-button");
// Add an event listener to the subscribe button
subscribeButton.addEventListener("click", () => {
  // Display the alert window
  showMessage("Thank you for subscribing.");
});



// Gallery Page ----------------------------------------------------

// Initialize an empty cart array
var cart = JSON.parse(sessionStorage.getItem("cart")) || [];

function addToCart(item) {
  // Add item to array
  cart.push(item);
  // Store in session storage
  sessionStorage.setItem("cart", JSON.stringify(cart));
  // Display the alert window
  showMessage("Item added to the cart: " + item);
}

// Select all elements with the class "add-to-cart-button"
var addCartButton = document.querySelectorAll(".add-to-cart-button");
// Loop through each button and add an event listener
addCartButton.forEach((button) => {
  button.addEventListener("click", () => {
      // Get the specific product value
      var item = button.getAttribute("item");
      // Add the item to the cart
      addToCart(item);
  })
});


// Select elements with the id "view-cart-button" and "cart-modal"
var viewCartButton = document.getElementById("view-cart-button");
var cartModal = document.getElementById("cart-modal");
// Add an event listener to the view cart button
viewCartButton.addEventListener("click", () => {
    if (cart && cart.length > 0) {
      // Display the cart items
      openCartModal();
      displayCartItems();
    } else {
      // Display the alert window
      showMessage("No items in cart.");
    }
  });

  function openCartModal() {
    cartModal.style.display = "block";
  }

  function displayCartItems() {
    var cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";

    if (cart && cart.length > 0) {
      for (var i = 0; i < cart.length; i++)
      {
        var listItem = document.createElement("li");
        listItem.textContent = cart[i];
        cartList.appendChild(listItem);
      }
    }
  }

// Select the element with the id "close-cart-modal"
var closeCartButton = document.getElementById("close-cart-modal");
// Add an event listener to closeCartButton
closeCartButton.addEventListener("click", () => {
  closeCartModal();
});
// Function to close the modal by changing CSS property
function closeCartModal() {
  cartModal.style.display = "none";
}

// Select element with the id "clear-cart-button"
var clearCartButton = document.querySelectorAll(".clear-cart-button");
// Add an event listener to the clear cart button
clearCartButton.forEach((button) => {
  button.addEventListener("click", () => {
  // Determine if the cart is empty
  if (cart.length > 0) {
    clearCart();
    displayCartItems();
    // Display the alert window
    showMessage("Cart cleared");
  } else {
    // Display the alert window
    showMessage("No items to clear.");
  }
  closeCartModal();
});
});

// Function to clear cart
function clearCart() {
    // Clear the cart
    cart = [];
    // Clear from session storage
    sessionStorage.removeItem("cart");
}

// Select element with the id "process-order-button"
var processOrderButton = document.querySelectorAll(".process-order-button");
// Add an event listener to the process order button
processOrderButton.forEach((button) => {
  button.addEventListener("click", () => {
  // Determine if the cart is empty
  if (cart.length > 0) {
    // Display the alert window
    showMessage("Thank you for your order");
    clearCart();
    displayCartItems();
    closeCartModal();
  } else {
    // Display the alert window
    showMessage("Cart is empty.");
  }
});
});

// About Page ----------------------------------------------------

// Select the form element
const form = document.getElementById("contact-form");

// Add an event listener to the submit button
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission
  submitForm();
});

function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const feedback = document.getElementById("feedback").value;
  const customOrder = document.getElementById("custom-order").checked;

  const customerInfo = {
    name: name,
    email: email,
    phone: phone,
    feedback: feedback,
    customOrder: customOrder,
  };

    // Retrieve the existing array from local storage or initialize a new one
    var storedFormData = JSON.parse(localStorage.getItem("customerInfo")) || [];
    
    //  Add the new customer info to the array
    storedFormData.push(customerInfo);

  // Save customer information to localStorage
  localStorage.setItem(name, JSON.stringify(customerInfo));

  // Access and parse local data back out of localStorage
  const who = JSON.parse(localStorage.getItem(name));
  showMessage("Thank you for your message, " + who.name + "!");
};
  

// Either clear out the innerHTML of the cart list or initialize the list items from the cart items stored in sessionStorage
displayCartItems();
  // ------------------------------------------------------------------

  

// Custom function in case of migration to different platform / alert deprecation
function showMessage(message) {
  alert(message);
};

});