//handle favorite button when clicked
export function handleFavoriteButton(game) {
    let currentFavorites = JSON.parse(localStorage.getItem('FAVORITES'))
    if (!currentFavorites) {
        localStorage.setItem('FAVORITES', JSON.stringify([]))
        currentFavorites = JSON.parse(localStorage.getItem('FAVORITES'))
    }
    if (checkIfAlreadyFavorite(game, currentFavorites)) {
        let newFavorites = removeFromFavorites(game, currentFavorites)
        localStorage.setItem('FAVORITES', JSON.stringify(newFavorites))
        return
    }
    else {
        currentFavorites.push(game)
    }
    localStorage.setItem('FAVORITES', JSON.stringify(currentFavorites))
}

//returns button element on current state (already favorite or not)
export function checkButtonState(game, favorites) {
    //check if favoritelist exists
    if (favorites) {
        //check if game is in favoritelist
        if (checkIfAlreadyFavorite(game, favorites)) {
            return '<button aria-label="favorite" class="favorite-button active">'
        }
        else {
            return '<button aria-label="favorite" class="favorite-button">'
        }
    }
    else {
        return '<button aria-label="favorite" class="favorite-button">'
    }
}
//returns true when the game is already in the favorites array
function checkIfAlreadyFavorite(game, array) {
    let isExisting = false
    array.forEach(item => {
        if (item.id === game.id) {
            isExisting = true
        }
    })
    return isExisting
}

//returns back the array with given game removed
function removeFromFavorites(game, array) {
    let newArray = [...array]
    newArray.forEach((item, index) => {
        if (item.id === game.id) {
            newArray.splice(index, 1)
        }
    })
    return newArray

}

//returns average rating from given array rounded to 2 decimals
export function calculateAverageRating(array) {
    return Math.round(array.map(item => item.rating).reduce((acc, value) => acc + value) / array.length * 100) / 100
}