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
});