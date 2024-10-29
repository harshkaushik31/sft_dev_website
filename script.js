console.log("Hello World");
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.image-card');
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    }

    showCard(currentIndex); // Show the first card initially
    setInterval(nextCard, 5000); // Change card every 5 seconds

    const aboutImage = document.querySelector('.about-image img');

    aboutImage.addEventListener('mousemove', function(e) {
        const rect = aboutImage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        aboutImage.style.transform = `rotateX(${deltaY * 10}deg) rotateY(${deltaX * 10}deg)`;
    });

    aboutImage.addEventListener('mouseleave', function() {
        aboutImage.style.transform = 'rotateX(0) rotateY(0)';
    });
});