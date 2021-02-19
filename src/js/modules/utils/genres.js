//check is there has been filtered
export function checkFiltering(array, filter) {
    if (filter === 'all') {
        return array
    }
    else {
        return array.filter(game => {
            return game.genres[0].name === filter
        })
    }
}

//check if game genre exists
export function checkGenreExisting(game) {
    if (!game.genres[0]) {
        return 'Geen'
    }
    else {
        return game.genres[0].name
    }
}


//returns array with unique genres
export function filterGenres(data) {
    const games = data
    const gameList = games.results
    const genreList = gameList.map(game => game.genres[0].name)
    const uniqueGenres = [...new Set(genreList)]
    return uniqueGenres
}