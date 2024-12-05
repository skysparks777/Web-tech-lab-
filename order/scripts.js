// DOM Elements
const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const orderList = document.getElementById('order-list');
const totalAmount = document.getElementById('total-amount');
let currentIndex = 0;

// Slide Navigation
function navigateSlides(direction) {
  const slideCount = slides.length;
  currentIndex = (currentIndex + direction + slideCount) % slideCount;
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => navigateSlides(-1));
nextBtn.addEventListener('click', () => navigateSlides(1));

// Quantity Update
function updateQuantity(name, change) {
  const quantitySpan = document.getElementById(`${name}-quantity`);
  let quantity = parseInt(quantitySpan.textContent);
  quantity = Math.max(1, quantity + change);
  quantitySpan.textContent = quantity;
}

// Add to Order
function addToOrder(name, price) {
  const quantity = parseInt(document.getElementById(`${name}-quantity`).textContent);
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${name} x${quantity}</span>
    <span class="order-price">$${(quantity * price).toFixed(2)}</span>
  `;
  orderList.appendChild(li);
  updateTotal();
}

// Update Total Amount
function updateTotal() {
  let total = 0;
  document.querySelectorAll('#order-list li .order-price').forEach(item => {
    total += parseFloat(item.textContent.slice(1));
  });
  totalAmount.textContent = `$${total.toFixed(2)}`;
}

// Customize Order
function customizeOrder() {
  const orderType = document.getElementById('order-type').value;
  const addOns = document.getElementById('add-ons').value;
  const specialInstructions = document.getElementById('special-instructions').value;

  alert(`Order Customization:
  - Type: ${orderType}
  - Add-ons: ${addOns}
  - Instructions: ${specialInstructions}`);
}

// Place Order
document.getElementById('place-order').addEventListener('click', () => {
  if (orderList.children.length === 0) {
    alert('Your order is empty!');
    return;
  }
  alert('Order placed successfully!');
  orderList.innerHTML = '';
  updateTotal();
});
