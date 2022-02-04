const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userId = urlParams.get('userId');
const api_url = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;

async function todos() {
    const response = await fetch(api_url);
    const todos = await response.json();
    const todosContainer = document.getElementsByClassName('todos-container')[0];

    todos.forEach(todo => {
        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card-grid');
        const card = document.createElement('div');
        card.classList.add('card');
        cardGrid.appendChild(card);

        const title = document.createElement('h1');
        title.textContent = todo.title
        card.appendChild(title);

        const check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        check.checked = todo.completed
        card.appendChild(check)


        todosContainer.appendChild(cardGrid);
    });
}

todos();