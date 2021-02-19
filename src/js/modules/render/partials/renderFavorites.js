import { createFavoriteList } from '../../components/favoriteList.js'
import { clearElement } from '../../utils/utils.js'

//renders favoritelist to HTML
export function renderFavorites() {
    const favoriteUL = document.querySelector('.favorites')
    const favoriteGames = JSON.parse(localStorage.getItem('FAVORITES'))
    const noFavoritesMessage = document.querySelector('.no-favorites-message')
    //clear list
    clearElement(favoriteUL)

    //add game items when existing
    if (favoriteGames) {
        if (favoriteGames.length > 0) {
            noFavoritesMessage.remove();
        }
        const favoriteGameArray = createFavoriteList(favoriteGames)
        favoriteGameArray.forEach(game => {
            favoriteUL.insertAdjacentHTML('beforeend', game)
        })
    }


}