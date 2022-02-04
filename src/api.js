const api_url = 'https://jsonplaceholder.typicode.com/users';

async function usuarios() {
    const response = await fetch(api_url);
    const users = await response.json();
    const usersContainer = document.getElementsByClassName('users-container')[0];
    users.forEach(user => {
        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card-grid');
        const card = document.createElement('div');
        card.classList.add('card');
        cardGrid.appendChild(card);

        const name = document.createElement('h3');
        name.textContent = user.name
        card.appendChild(name);
        const username = document.createElement('h3');
        username.textContent = user.username
        card.appendChild(username);
        const email = document.createElement('h3');
        email.textContent = user.email
        card.appendChild(email);
        const city = document.createElement('h3');
        city.textContent = user.address.city
        card.appendChild(city);
        const phone = document.createElement('h3');
        phone.textContent = user.phone
        card.appendChild(phone);
        const website = document.createElement('h3');
        website.textContent = user.website
        card.appendChild(website);

        const buttonPosts = document.createElement('button');
        buttonPosts.setAttribute('id', user.id)
        buttonPosts.setAttribute('buttonType', 'posts');
        buttonPosts.textContent = 'Ver posts';
        card.appendChild(buttonPosts);

        const buttonAlbums = document.createElement('button');
        buttonAlbums.setAttribute('id', user.id)
        buttonAlbums.setAttribute('buttonType', 'albums');
        buttonAlbums.textContent = 'Ver albums';
        card.appendChild(buttonAlbums);

        const buttonTodos = document.createElement('button');
        buttonTodos.setAttribute('id', user.id)
        buttonTodos.setAttribute('buttonType', 'todos');
        buttonTodos.textContent = 'Ver todos';
        card.appendChild(buttonTodos);

        usersContainer.appendChild(cardGrid);

        document.querySelectorAll(`button[id='${user.id}']`).forEach((button) => {
            button.addEventListener("click", (event) => {
                const buttonType = event.target.getAttribute('buttonType');
                const id = event.target.getAttribute('id');
                switch(buttonType) {
                    case 'posts':
                        window.location.href = `posts.html?userId=${id}`;
                        break;
                    case 'albums':
                        window.location.href = `albums.html?userId=${id}`;
                        break;
                    case 'todos':
                        window.location.href = `todos.html?userId=${id}`;
                        break;
                }
            })
        });
    });
            
}

usuarios();