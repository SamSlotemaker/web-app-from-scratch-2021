const baseURL = "https://api.rawg.io/api/"

export const getData = async (subject, query) => {
    let response;
    response = query ? await fetch(baseURL + subject + query) : await fetch(baseURL + subject)
    const data = await response.json()
    console.log('getting Data')
    return data
}

export async function getPlatforms(subject, query) {
    // //get from localstorage first
    const localStoragePlatformList = localStorage.getItem('PLATFORM_LIST')
    // //fetch data if localstorage doesn't exist
    return localStoragePlatformList ? JSON.parse(localStoragePlatformList) : await getData(subject + query)
}
//return array of articles with games
export async function getGames(subject, query) {
    //get from localstorage first
    const localStorageGameList = localStorage.getItem('GAME_LIST')
    //fetch data if localstorage doesn't exist
    return localStorageGameList ? JSON.parse(localStorageGameList) : await getData(subject + query)
}

export async function getGenres(subject, query) {
    const games = await getGames(subject, query)
    const gameList = games.results
    const genreList = gameList.map(game => game.genres[0].name)
    const uniqueGenres = [...new Set(genreList)]
    return uniqueGenres;
}