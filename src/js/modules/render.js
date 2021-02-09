import { getData } from './api.js'
import { createGameList } from './gameList.js'
import { createPlatformList } from './platformList.js'
const mainContainer = document.querySelector('main')

//create overview page
export async function overview() {
    clearElement(mainContainer)
    const overviewContainer =
        `<h1>Game overview</h1>
    <section>
            <h2>Games</h2>
        <div class="games"></div>
    </section>
    <section>
            <h2>All platforms</h2>
        <div class="platforms"> </div>
    </section>`

    mainContainer.insertAdjacentHTML('beforeend', overviewContainer)

    const gameSection = document.querySelector('.games')
    const platformSection = document.querySelector('.platforms')

    //insert games into gameSection
    const gameList = await createGameList()
    gameList.forEach(game => {
        gameSection.insertAdjacentHTML('beforeend', game)
    })

    const platformList = await createPlatformList()
    platformList.forEach(platform => {
        platformSection.insertAdjacentHTML('beforeend', platform)
    })
}

//create detail page
export function detail(id) {
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

function clearElement(element) {
    element.innerHTML = ''
}