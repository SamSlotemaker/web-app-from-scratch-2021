import { getData } from './api.js'

//return array of articles with games
export async function getGames(subject, query) {
    //get from localstorage first
    const localStorageGameList = localStorage.getItem('GAME_LIST')
    //fetch data if localstorage doesn't exist
    return localStorageGameList ? JSON.parse(localStorageGameList) : await getData(subject + query)
}