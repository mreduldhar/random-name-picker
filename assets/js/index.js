
const inputName = document.getElementById('input_name');
const addBtn = document.getElementById('add_btn');
const showBtn = document.getElementById('show_btn');
const clearBtn = document.getElementById('clear_btn');
const displayName = document.getElementById('display_name');


const names = [];

// Add event listeners
addBtn.addEventListener('click', () => {
    const newName = inputName.value.trim();
    if (newName !== '') {
        names.push(newName);
        inputName.value = '';
    }
});

showBtn.addEventListener('click', () => {
    if (names.length > 0) {
        const randomIndex = Math.floor(Math.random() * names.length);
        const randomName = names[randomIndex];
        displayName.textContent = `Today, ${randomName} will take the class.`;
    } else {
        displayName.textContent = 'No names available';
    }
});

clearBtn.addEventListener('click', () => {
    names.length = 0; 
    displayName.textContent = '';
});

inputName.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault(); 
        addBtn.click(); 
    }
});