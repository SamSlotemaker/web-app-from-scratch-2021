import { renderOverviewContainer } from './renderOverviewContainer.js'
import { renderGameList, renderGenreForm } from './renderGameSection.js'
import { renderPlatformSection } from './renderPlatformSection.js'
import { clearElement } from '../utils/utils.js'
import { getData } from '../api/api.js'

const mainContainer = document.querySelector('main')
const subjectGames = 'games'
const subjectPlatforms = 'platforms'
const pageSize = '?page_size=20&page=3'
const ordering = '?ordering=-games_count'
const GAMES_KEY = 'GAME_LIST'
const PLATFORMS_KEY = 'PLATFORM_LIST'

//create overview page
export async function overview(genre) {
    //fetch game and platform data
    console.log('render overview')

    clearElement(mainContainer)
    renderOverviewContainer(mainContainer)

    const gameData = await getData(subjectGames, pageSize, GAMES_KEY)

    renderGenreForm(gameData)
    renderGameList(gameData, genre)

    const platformData = await getData(subjectPlatforms, ordering, PLATFORMS_KEY)
    renderPlatformSection(platformData)
}



