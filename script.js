const API_URL = 'http://localhost:3000/monsters';
const monstersContainer = document.getElementById('monsters-container');
const monsterForm = document.getElementById('monster-form');

// Fetch and display the first 50 monsters
async function fetchMonsters() {
    try {
        const response = await fetch(`${API_URL}?_limit=50`);
        const monsters = await response.json();
        displayMonsters(monsters);
    } catch (error) {
        console.error('Error fetching monsters:', error);
    }
}

// Display monsters in the DOM
function displayMonsters(monsters) {
    monstersContainer.innerHTML = '';
    monsters.forEach(monster => {
        const monsterCard = document.createElement('div');
        monsterCard.classList.add('monster-card');
        monsterCard.innerHTML = `
            <h3>${monster.name}</h3>
            <p><strong>Age:</strong> ${monster.age}</p>
            <p><strong>Description:</strong> ${monster.description}</p>
        `;
        monstersContainer.appendChild(monsterCard);
    });
}

// Create a new monster
async function createMonster(event) {
    event.preventDefault();
    const formData = new FormData(monsterForm);
    const monsterData = {
        name: formData.get('name'),
        age: parseFloat(formData.get('age')),
        description: formData.get('description')
    };
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(monsterData)
        });
        if (response.ok) {
            const newMonster = await response.json();
            addMonsterToList(newMonster);
            monsterForm.reset();
        } else {
            console.error('Error creating monster:', response.statusText);
        }
    } catch (error) {
        console.error('Error creating monster:', error);
    }
}

// Add a new monster to the list
function addMonsterToList(monster) {
    const monsterCard = document.createElement('div');
    monsterCard.classList.add('monster-card');
    monsterCard.innerHTML = `
        <h3>${monster.name}</h3>
        <p><strong>Age:</strong> ${monster.age}</p>
        <p><strong>Description:</strong> ${monster.description}</p>
    `;
    monstersContainer.insertBefore(monsterCard, monstersContainer.firstChild);
}

// Event listeners
document.addEventListener('DOMContentLoaded', fetchMonsters);
monsterForm.addEventListener('submit', createMonster);