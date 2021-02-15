import { createGameList } from '../components/gameList.js'
import { genreForm } from '../components/genreFilter.js'
import { clearElement } from '../utils/utils.js'


//render gameslist 
export async function renderGameList(data, genre) {
    const gamesContainer = document.querySelector('.games')
    //create gamelist
    const gameList = await createGameList(data, genre).finally(() => {
        clearElement(gamesContainer) //remove loading state when data is loaded or failed
    })

    // add gamelist to html
    gameList.forEach(game => {
        gamesContainer.insertAdjacentHTML('beforeend', game)
    })
}


//render genre form
export async function renderGenreForm() {
    const gamesSection = document.querySelector('.games-section')

    //create form
    const genreFormHTML = await genreForm()
    //insert into html
    gamesSection.insertAdjacentHTML('afterbegin', genreFormHTML)

    //handle filter change
    let radios = document.querySelectorAll('form>input')
    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            //set filter choice to localstorage
            localStorage.setItem('FILTER', JSON.stringify(e.target.value))
            const localStorageGameList = JSON.parse(localStorage.getItem('GAME_LIST'))
            renderGameList(localStorageGameList, e.target.value)
        })
    })
}