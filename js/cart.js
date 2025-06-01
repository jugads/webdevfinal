// Initialize the total cost variable
var totalCost = 0;

// Function to update the cart UI from localStorage
function updateCart() {
    // Retrieve the 'cart' data from localStorage
    var cartStorage = localStorage.getItem('cart');
    console.log(cartStorage);

    // Split the cart string into individual items using space as separator
    var splitCart = cartStorage.split(' ');
    console.log(splitCart);

    // Remove the last element (which is an empty string due to trailing space)
    splitCart.pop();
    console.log(splitCart)

    // Arrays to store abbreviations and prices separately
    var abbCart = [];
    var priceCart = [];

    // Loop through each item in the cart
    for (let i = 0; i < splitCart.length; i++) {
        // Extract the 3-character abbreviation (e.g., 'liv' from 'liv-$74.99')
        abbCart.push(splitCart[i].charAt(0) + splitCart[i].charAt(1) + splitCart[i].charAt(2));
        // Extract the price part after the dash (e.g., '74.99')
        priceCart.push(splitCart[i].slice(5));
    }

    console.log(abbCart)
    console.log(priceCart)

    // Reset totalCost before calculation
    totalCost = 0;

    // Loop through each item and create UI elements
    for (i in abbCart) {
        // Create a container for the cart item
        const cartCard = document.createElement('div');
        cartCard.classList.add('cart-item');

        // Create and add the image element
        const img = document.createElement('img');
        img.src = 'images/' + abbCart[i] + '.png';
        cartCard.appendChild(img);

        // Create and add the abbreviation text (e.g., LIV)
        const abbSpan = document.createElement('span');
        abbSpan.textContent = abbCart[i].toUpperCase() + ' ';
        cartCard.appendChild(abbSpan);

        // Create and add the price text
        const priceSpan = document.createElement('span');
        priceSpan.textContent = '$' + priceCart[i];
        cartCard.appendChild(priceSpan);

        // Append the cart item to the main container
        document.getElementById('all-items').appendChild(cartCard);

        // Add to total cost
        totalCost += parseFloat(priceCart[i]);

        // Clone the priceSpan for a pricing summary section
        var pricingNode = priceSpan.cloneNode();
        pricingNode.textContent = '$' + priceCart[i] + ' (' + abbCart[i].toUpperCase() + ')';
        document.getElementById('pricing').appendChild(pricingNode);
        document.getElementById('pricing').appendChild(document.createElement('br'));
    }

    // Round totalCost to 2 decimal places
    totalCost = totalCost.toFixed(2);

    // Add spacing and display the final total
    document.getElementById('pricing').appendChild(document.createElement('br'));
    document.getElementById('pricing').appendChild(document.createElement('br'));
    var finalCost = document.createElement('span');
    finalCost.textContent = 'Total: $' + totalCost;
    document.getElementById('pricing').appendChild(finalCost);
}

// Run updateCart() when the page content is loaded
window.addEventListener('DOMContentLoaded', updateCart);

// Show a checkout alert with the total cost when 'checkout' is clicked
document.getElementById("checkout").addEventListener('click', function() {
    alert('Checkout Successful. Charged $' + totalCost.toString() + '!');
});

// Clear the cart and reload the page when 'clear-cart' is clicked
document.getElementById('clear-cart').addEventListener('click', function() {
    localStorage.setItem('cart', '');
    window.location.reload();
});
