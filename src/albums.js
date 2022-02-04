const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userId = urlParams.get('userId');
const api_url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;

async function albums() {
    const response = await fetch(api_url);
    const albums = await response.json();
    const albumsContainer = document.getElementsByClassName('albums-container')[0];

    albums.forEach(album => {
        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card-grid');
        const card = document.createElement('div');
        card.classList.add('card');
        cardGrid.appendChild(card);

        const title = document.createElement('h1');
        title.textContent = album.title
        card.appendChild(title);

        const buttonFotos = document.createElement('button');
        buttonFotos.setAttribute('id', album.id)
        buttonFotos.textContent = 'Ver Fotos';
        card.appendChild(buttonFotos);

        albumsContainer.appendChild(cardGrid);


        document.querySelectorAll(`button[id='${album.id}']`).forEach((button) => {
            button.addEventListener("click", (event) => {
                const id = event.target.getAttribute('id');
                window.location.href = `fotos.html?albumId=${id}`;
            })
        });
    });
}

albums();