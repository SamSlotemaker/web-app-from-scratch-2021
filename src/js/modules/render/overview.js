import { createGameList } from '../components/gameList.js'
import { genreForm } from '../components/genreFilter.js'
import { createPlatformList } from '../components/platformList.js'
import { clearElement, removeElementsByClass } from '../utils/utils.js'
const mainContainer = document.querySelector('main')

//create overview page
export async function overview(genre) {
    clearElement(mainContainer)
    renderOverviewContainer();
    renderGenreForm()
    renderGameSection(genre);
    renderPlatformSection();

}

function renderOverviewContainer() {
    const overviewContainer =
        `<h1>Most popular games</h1>
<section class="games-section">
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
}

async function renderPlatformSection() {
    const platformSection = document.querySelector('.platforms')
    const platformList = await createPlatformList()
    //add platformlist to html
    platformList.forEach(platform => {
        platformSection.insertAdjacentHTML('beforeend', platform)
    })
}

async function renderGameSection(genre) {
    const gamesContainer = document.querySelector('.games')
    clearElement(gamesContainer) //clear huidige lijst met games

    const gameList = await createGameList(genre)
    //remove loading state when data is loaded
    if (gameList) {
        removeElementsByClass('loading')
    }
    // add gamelist to html
    gameList.forEach(game => {
        gamesContainer.insertAdjacentHTML('beforeend', game)
    })
}
async function renderGenreForm() {
    const gamesSection = document.querySelector('.games-section')
    // add filter to html 
    const genreFormHTML = await genreForm()
    gamesSection.insertAdjacentHTML('afterbegin', genreFormHTML)

    //handle filter
    let radios = document.querySelectorAll('form>input')
    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            //set filter choice to localstorage
            localStorage.setItem('FILTER', JSON.stringify(e.target.value))
            renderGameSection(e.target.value)
        })
    })
}