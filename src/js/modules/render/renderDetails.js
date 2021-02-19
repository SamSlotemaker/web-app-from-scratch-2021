import { clearElement } from '../utils/utils.js'
import { getData } from '../api/api.js'
const mainContainer = document.querySelector('main')

//render detail page
export function renderDetail(id) {
    clearElement(mainContainer)
    getData('games/' + id)
        .then(game => {
            const details = `
            <article class="game-details">
                <a href="#overview" class="back-button">Back</a>
                <h1>${game.name}</h1>
                <div class="grid-container">
                    <img src="${game.background_image}" alt="">
                    <div>
                        <h2>Description</h2>
                        ${game.description}
                    </div>
                </div>
                <button aria-label="favorite" class="favorite-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg></button>
            </article>
            `
            mainContainer.insertAdjacentHTML('beforeend', details)

            const button = document.querySelector('.favorite-button')
            button.addEventListener('click', function () {
                handleFavoriteButton(game)
            })
        })
}


//handle favorite button when clicked
function handleFavoriteButton(game) {
    let currentFavorites = JSON.parse(localStorage.getItem('FAVORITES'))
    if (!currentFavorites) {
        localStorage.setItem('FAVORITES', JSON.stringify([]))
        currentFavorites = JSON.parse(localStorage.getItem('FAVORITES'))
    }
    if (checkIfAlreadyFavorite(game, currentFavorites)) {
        console.log('deze game is al favoriet')
        return;
    }
    else {
        currentFavorites.push(game)
    }
    console.log(currentFavorites)
    localStorage.setItem('FAVORITES', JSON.stringify(currentFavorites))
}

//returns true when the game is already in the favorites array
function checkIfAlreadyFavorite(game, array) {
    let isExisting = false;
    array.forEach(item => {
        if (item.id === game.id) {
            isExisting = true;
        }
    })
    return isExisting;
}