import { getData } from './api.js'

//return array of articles with games
export async function getGames(subject, query) {
    //get from localstorage first
    const localStorageGameList = JSON.parse(localStorage.getItem('GAME_LIST'))
    //fetch data if localstorage doesn't exist
    return localStorageGameList ? localStorageGameList : await getData(subject + query)
}