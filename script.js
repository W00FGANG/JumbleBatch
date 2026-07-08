document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple interaction for Add to Cart buttons
    const addButtons = document.querySelectorAll('.btn-add');
    const cartIcon = document.querySelector('.cart-icon');
    let cartCount = 0;

    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Visual feedback
            const originalText = this.innerText;
            this.innerText = 'Added!';
            this.style.backgroundColor = '#5ca385';
            this.style.color = '#fff';
            
            // Update cart (simple mock)
            cartCount++;
            cartIcon.innerHTML = `🛒 <span style="font-size: 0.8rem; background: red; color: white; border-radius: 50%; padding: 2px 6px; position: absolute; top: 15px;">${cartCount}</span>`;
            
            // Reset button
            setTimeout(() => {
                this.innerText = originalText;
                this.style.backgroundColor = '';
                this.style.color = '';
            }, 1500);
        });
    });
});
