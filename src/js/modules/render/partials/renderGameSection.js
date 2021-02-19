import { createGameList } from '../../components/gameList.js'
import { createGenreFilter } from '../../components/genreFilter.js'
import { clearElement } from '../../utils/utils.js'

//render gameslist 
export function renderGameList(data, genre) {
    const gamesContainer = document.querySelector('.games')
    //create gamelist
    const gameList = createGameList(data, genre)
    //remove loading state when data is available
    if (gameList) {
        clearElement(gamesContainer)
    }
    // add gamelist to html
    gameList.forEach(game => {
        gamesContainer.insertAdjacentHTML('beforeend', game)
    })
}

//render genre form
export function renderGenreForm(data) {
    const gameSectionHeading = document.querySelector('.games-section h2')
    //create form
    const genreFormHTML = createGenreFilter(data)
    //insert into html
    gameSectionHeading.insertAdjacentHTML('afterend', genreFormHTML)
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