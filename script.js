const newsletterForm = document.getElementById('newsletter-form');
const newsletterEmail = document.getElementById('newsletter-email');
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector(".nav-links");
const addToCartBtns = document.getElementsByClassName("add-to-cart");
const cartCount = document.querySelector('.cart-count'); 
const profileIcon = document.querySelector('.profile-icon')
const profileDropdown = document.querySelector('.profile-dropdown');
const closeBtn = document.getElementById('close-btn');



newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (newsletterEmail.value === "") {
        alert("Please input your email!");
    } else {
        alert("Subscribed!")
    }
    newsletterForm.reset();
});

menuIcon.addEventListener('click', () => {
    profileDropdown.style.display = 'none';
    navLinks.classList.toggle('show');
});

const addToCartEvent = () => {
    alert("Successfully Added to Cart");
    let count = 0;
    count += 1;
    cartCount.innerHTML = count;
}

[...addToCartBtns].forEach(
    (btn) => {btn.addEventListener("click", addToCartEvent)}
); 


profileIcon.addEventListener('click', () => {
    if (profileDropdown.style.display === 'none') {
        navLinks.classList.remove('show');
        profileDropdown.style.display = 'block';
    } else {
        profileDropdown.style.display = 'none';
    }
});

closeBtn.addEventListener('click', () => {
    profileDropdown.style.display = 'none';
});
