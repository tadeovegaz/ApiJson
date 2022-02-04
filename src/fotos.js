const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const albumId = urlParams.get('albumId');
const api_url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;


async function fotos() {
    const response = await fetch(api_url);
    const fotos = await response.json();
    const fotosContainer = document.getElementsByClassName('fotos-container')[0];

    fotos.forEach(foto => {
        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card-grid');
        const card = document.createElement('div');
        card.classList.add('card');
        cardGrid.appendChild(card);

        const title = document.createElement('h1');
        title.textContent = foto.title
        card.appendChild(title);

        const url = document.createElement('a');
        url.href = foto.url;
        url.textContent = 'ver foto'
        card.appendChild(url);

        const salto = document.createElement('br');
        card.appendChild(salto);

        const image = document.createElement('img');
        image.src = foto.thumbnailUrl;
        card.appendChild(image)
        fotosContainer.appendChild(cardGrid);
    });

}

 fotos();

