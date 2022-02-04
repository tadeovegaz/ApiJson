const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const postId = urlParams.get('postId');
const api_url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;


async function comments() {
    const response = await fetch(api_url);
    const comments = await response.json();
    const commentsContainer = document.getElementsByClassName('comments-container')[0];

    comments.forEach(comment => {
        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card-grid');
        const card = document.createElement('div');
        card.classList.add('card');
        cardGrid.appendChild(card);

        const name = document.createElement('h1');
        name.textContent = comment.name
        card.appendChild(name);

        const email = document.createElement('h3');
        email.textContent = comment.email
        card.appendChild(email);

        const body = document.createElement('p');
        body.textContent = comment.body
        card.appendChild(body);

        commentsContainer.appendChild(cardGrid);

    });

}

comments();