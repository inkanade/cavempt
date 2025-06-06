const cartTab = document.querySelector('.cartTab');
const openCartButtons = document.querySelectorAll('.cartbutton, .cart-nav-button');
const closeCartButton = document.querySelector('.close');

// Open cart for both product and navbar buttons
openCartButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent navigation if it's an <a>
    cartTab.classList.add('active');
  });
});

// Close cart
closeCartButton.addEventListener('click', () => {
  cartTab.classList.remove('active');
});

document.querySelector(".checkOut").addEventListener("click", function () {
    window.location.href = "checkout.html"; // Replace with your actual file name/path
  });