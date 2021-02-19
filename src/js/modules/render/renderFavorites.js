import { createFavoriteList } from '../components/favoriteList.js'
import { clearElement } from '../utils/utils.js'

export function renderFavorites() {
    const favoriteUL = document.querySelector('.favorites')
    const favoriteGames = JSON.parse(localStorage.getItem('FAVORITES'))


    //clear list
    clearElement(favoriteUL)

    //add game items when existing
    if (favoriteGames) {
        const favoriteGameArray = createFavoriteList(favoriteGames)
        favoriteGameArray.forEach(game => {
            favoriteUL.insertAdjacentHTML('beforeend', game)
        })
    }


}