const items = [
    { name: 'Mars rug' },
    { name: 'Keyboard sticker' },
    { name: 'Smart watch' },
    { name: 'Wireless keyboard' },
    { name: 'Mouse' },
    { name: 'AirPods' },
    { name: 'Powerbank' },
    { name: 'USB flash drive' },
    { name: 'Smartphone' },
    { name: 'Playstation 5' },
    { name: 'Yandex Station' },
    { name: 'Planshet Samsung' }
];

const input = document.getElementById('inp');
const searchButton = document.querySelector('.inp_button button');
const cardsContainer = document.querySelector('.cards');

const displayItems = (filteredItems) => {
    cardsContainer.innerHTML = '';

    filteredItems.map(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="./image 10.png" alt="">
            <h3>${item.name}</h3>
            <div class="coins">
                <img src="./Coin 1.png" alt="">
                <h4>100 coins</h4>
            </div>
            <p>24 dona mavjud</p>
        `;
        cardsContainer.appendChild(card);
    });
};

searchButton.addEventListener('click', () => {
    const query = input.value.toLowerCase();
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
    displayItems(filteredItems);
});

displayItems(items);
