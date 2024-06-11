document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const scoreDisplay = document.getElementById('score');
    const gameHeader = document.getElementById('game-header');
    const winMessage = document.getElementById('win-message');
    let score = 0;
    
    // Array of card names
    const cardNames = ['Max Verstappen', 'Carlos Sainz Jr.', 'Jose Mourinho', 'Arda Güler', 'Cilian Murphy', 'David Goggins'];
    
    // Function to randomly select a card name
    function selectRandomCard() {
        const randomIndex = Math.floor(Math.random() * cardNames.length);
        return cardNames[randomIndex];
    }
    
    // Function to shuffle the cards
    function shuffleCards() {
        const cardGrid = document.querySelector('.card-grid');
        cardGrid.innerHTML = '';
        const shuffledCards = Array.from(cards).sort(() => Math.random() - 0.5);
        shuffledCards.forEach(card => cardGrid.appendChild(card));
    }
    
    // Set the target card for the current game
    let targetCard = selectRandomCard();
    gameHeader.textContent = `Find the ${targetCard} card from the stack!`;
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('flipped')) {
                card.classList.add('flipped');
                const cardType = card.getAttribute('data-card');
                
                if (cardType === targetCard) {
                    score++;
                    scoreDisplay.textContent = score;
                    setTimeout(() => {
                        alert(`You found the ${targetCard} card!`);
                        resetGame();
                        shuffleCards(); // Shuffle the cards after finding the correct one
                    }, 500);
                } else {
                    setTimeout(() => {
                        card.classList.remove('flipped');
                    }, 1000);
                }
            }
        });
    });
    
    function resetGame() {
        cards.forEach(card => card.classList.remove('flipped'));
        // Select a new target card
        targetCard = selectRandomCard();
        gameHeader.textContent = `Find the ${targetCard} card from the stack!`;
    }
});
