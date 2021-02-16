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
            </article>
            `
            mainContainer.insertAdjacentHTML('beforeend', details)
        })
}
