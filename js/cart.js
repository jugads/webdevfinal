var totalCost = 0;
function updateCart() {
var cartStorage = localStorage.getItem('cart');
console.log(cartStorage);
var splitCart = cartStorage.split(' ');
console.log(splitCart);
splitCart.pop();
console.log(splitCart)
var abbCart = [];
var priceCart = [];
for (let i = 0; i<splitCart.length; i++) {
   abbCart.push(splitCart[i].charAt(0)+splitCart[i].charAt(1)+splitCart[i].charAt(2));
   priceCart.push(splitCart[i].slice(5))
}
console.log(abbCart)
console.log(priceCart)
totalCost = 0;
for (i in abbCart) {
    const cartCard = document.createElement('div');
    cartCard.classList.add('cart-item');

    const img = document.createElement('img');
    img.src = 'images/'+abbCart[i]+'.png';
    cartCard.appendChild(img);
    // Create and append the abbreviation span
    const abbSpan = document.createElement('span');
    abbSpan.textContent = abbCart[i].toUpperCase() + ' ';
    cartCard.appendChild(abbSpan);

    // Create and append the price span
    const priceSpan = document.createElement('span');
    priceSpan.textContent = '$' + priceCart[i];
    cartCard.appendChild(priceSpan);
    document.getElementById('all-items').appendChild(cartCard);
    totalCost += parseFloat(priceCart[i]);

    var pricingNode = priceSpan.cloneNode();
    pricingNode.textContent = '$' + priceCart[i] + ' ('+abbCart[i].toUpperCase()+')';
    document.getElementById('pricing').appendChild(pricingNode)
    document.getElementById('pricing').appendChild(document.createElement('br'))
}
totalCost = totalCost.toFixed(2);
document.getElementById('pricing').appendChild(document.createElement('br'))
document.getElementById('pricing').appendChild(document.createElement('br'))
var finalCost = document.createElement('span');
finalCost.textContent = 'Total: '+'$' + totalCost;
document.getElementById('pricing').appendChild(
    finalCost
)
}
updateCart();
document.getElementById("checkout").addEventListener('click', function() {alert('Checkout Successful. Charged $'+totalCost.toString()+'!')})
document.getElementById('clear-cart').addEventListener('click', function() {
    localStorage.setItem('cart', '')
    window.location.reload();
})