import { createGameList } from '../components/gameList.js'
import { genreFilter } from '../components/genreFilter.js'
import { clearElement } from '../utils/utils.js'

//render gameslist 
export function renderGameList(data, genre) {
    const gamesContainer = document.querySelector('.games')
    //create gamelist
    const gameList = createGameList(data, genre)

    if (gameList) {
        clearElement(gamesContainer) //remove loading state when data is loaded or failed
    }

    // add gamelist to html
    gameList.forEach(game => {
        gamesContainer.insertAdjacentHTML('beforeend', game)
    })
}

//render genre form
export function renderGenreForm(data) {
    const gamesSection = document.querySelector('.games-section')

    //create form
    const genreFormHTML = genreFilter(data)
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