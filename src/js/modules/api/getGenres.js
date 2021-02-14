import { getGames } from './getGames.js'

export async function getGenres(subject, query) {
    const games = await getGames(subject, query)
    const gameList = games.results
    const genreList = gameList.map(game => game.genres[0].name)
    const uniqueGenres = [...new Set(genreList)]
    return uniqueGenres;
}