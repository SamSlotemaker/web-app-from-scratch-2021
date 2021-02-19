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
        return;
    }
    else {
        currentFavorites.push(game)
    }
    localStorage.setItem('FAVORITES', JSON.stringify(currentFavorites))
}

//returns true when the game is already in the favorites array
export function checkIfAlreadyFavorite(game, array) {
    let isExisting = false;
    array.forEach(item => {
        if (item.id === game.id) {
            isExisting = true;
        }
    })
    return isExisting;
}

//returns back the array with given game removed
function removeFromFavorites(game, array) {
    let newArray = [...array]
    newArray.forEach((item, index) => {
        if (item.id === game.id) {
            newArray.splice(index, 1);
        }
    })
    return newArray

}