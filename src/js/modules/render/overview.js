import { createGameList } from '../components/gameList.js'
import { genreForm } from '../components/genreFilter.js'
import { createPlatformList } from '../components/platformList.js'
import { clearElement, removeElementsByClass } from '../utils/utils.js'
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

    //handle filter
    let radios = document.querySelectorAll('form>input')
    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            //set filter choice to localstorage
            localStorage.setItem('FILTER', JSON.stringify(e.target.value))
            overview(e.target.value)
        })
    })

    const gameList = await createGameList(genre)
    //remove loading state when data is loaded
    if (gameList) {
        removeElementsByClass('loading')
    }
    // add gamelist to html
    gameList.forEach(game => {
        gameSection.insertAdjacentHTML('beforeend', game)
    })

    const platformList = await createPlatformList()
    //add platformlist to html
    platformList.forEach(platform => {
        platformSection.insertAdjacentHTML('beforeend', platform)
    })
}

