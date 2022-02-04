const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userId = urlParams.get('userId');
const api_url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

async function posts() {
    const response = await fetch(api_url);
    const posts = await response.json();
    const postsContainer = document.getElementsByClassName('posts-container')[0];

    posts.forEach(post => {
        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card-grid');
        const card = document.createElement('div');
        card.classList.add('card');
        cardGrid.appendChild(card);

        const title = document.createElement('h1');
        //card.classList.add('clase_css'); agregar estilo
        title.textContent = post.title
        card.appendChild(title);
        const body = document.createElement('p');
        body.textContent = post.body
        card.appendChild(body);

        const buttonComments = document.createElement('button');
        buttonComments.setAttribute('id', post.id)
        buttonComments.textContent = 'Ver coments';
        card.appendChild(buttonComments);

        postsContainer.appendChild(cardGrid);


        document.querySelectorAll(`button[id='${post.id}']`).forEach((button) => {
            button.addEventListener("click", (event) => {
                const id = event.target.getAttribute('id');
                window.location.href = `comments.html?postId=${id}`;
            })
        });
    });
}

posts();