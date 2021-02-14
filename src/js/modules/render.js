import { getData } from './api.js'
import { createGameList } from './gameList.js'
import { genreForm } from './genreFilter.js'
import { createPlatformList } from './platformList.js'
const mainContainer = document.querySelector('main')

//create overview page
export async function overview(genre) {
    clearElement(mainContainer)
    const overviewContainer =
        `<h1>Most popular games</h1>
    <section>
            <h2>Games</h2>
        <div class="games">
       <article class="loading"></article>
       <article class="loading"></article>
       <article class="loading"></article>
       <article class="loading"></article>
       <article class="loading"></article>
       <article class="loading"></article>
        </div>
    </section>
    <section>
            <h2>All platforms</h2>
        <div class="platforms"> </div>
    </section>`

    mainContainer.insertAdjacentHTML('beforeend', overviewContainer)

    const gameSection = document.querySelector('.games')
    const platformSection = document.querySelector('.platforms')

    // add filter to html 
    const genreFormHTML = await genreForm()
    gameSection.insertAdjacentHTML('beforebegin', genreFormHTML)
    const gameList = await createGameList(genre)

    //handle filter
    let radios = document.querySelectorAll('form>input')
    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            overview(e.target.value)
        })
    })


    if (gameList) {
        removeElementsByClass('loading')
    }
    // add gamelist to html
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
function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}
