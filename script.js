const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

// Seguimiento de carta actual
let currentActiveCard = 0;

// Almacenar tarjetas DOM
const cardsEl = [];


// almacenar datos de tarjetas
const cardsData = [
    {
        question: '¿Cómo debe empezar una variable?',
        answer: 'Una letra, $ ó _'
    },
    {
        question: '¿Qué es una variable?',
        answer: 'Un contenedor para una porcion de datos'
    },
    {
        question: 'Ejemplo de una variable Sensitive Case',
        answer: 'estoEsUnaVariable'
    },
];

// Creando las tarjetas
function createCards() {
    cardsData.forEach((card, i) => createCard(card, i));
}

// Creando cada tarjeta en el DOM
function createCard(card, i) {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    if (i === 0) {
        cardEl.classList.add('active');
    }

    cardEl.innerHTML = `
    <div class="inner-card">
        <div class="inner-card-front">
            <p>${card.question}</p>
        </div>
        <div class="inner-card-back">
            <p>${card.answer}</p>
        </div>
    </div>
    `;

    cardEl.addEventListener('click', () => cardEl.classList.toggle('show-answer'));
    // Añadir tarjetas al dom
    cardsEl.push(cardEl);
    cardsContainer.appendChild(cardEl);

    updateCurrentText();
}

// mostrar numero de tarjetas
function updateCurrentText() {
    currentEl.innerText = `${currentActiveCard + 1} / ${cardsEl.length}`
}

createCards();

// Event listeners
nextBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card left';
    currentActiveCard += 1;
    if (currentActiveCard > cardsEl.length - 1) {
        currentActiveCard = cardsEl.length - 1;
        // currentActiveCard = 0;
    }
    cardsEl[currentActiveCard].className = 'card active';
    updateCurrentText();
});

prevBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card';
    currentActiveCard -= 1;
    if (currentActiveCard < 0) {
        currentActiveCard = 0;
    }
    cardsEl[currentActiveCard].className = 'card active';
    updateCurrentText();
});