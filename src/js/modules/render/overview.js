import { renderOverviewContainer } from './renderOverviewContainer.js'
import { renderGameList, renderGenreForm } from './renderGameSection.js'
import { renderPlatformSection } from './renderPlatformSection.js'
import { clearElement } from '../utils/utils.js'
import { getData } from '../api/api.js'

const mainContainer = document.querySelector('main')

const subjectGames = 'games'
const pageSize = '?page_size=20'
const GAMES_KEY = 'GAME_LIST'
const PLATFORMS_KEY = 'PLATFORM_LIST'

const subjectPlatforms = 'platforms'
const ordering = '?ordering=-games_count'

//create overview page
export async function overview(genre) {
    const gameData = await getData(subjectGames, pageSize, GAMES_KEY)
    const platformData = await getData(subjectPlatforms, ordering, PLATFORMS_KEY)

    clearElement(mainContainer)
    renderOverviewContainer(mainContainer)
    renderGenreForm(gameData)
    renderGameList(gameData, genre)
    renderPlatformSection(platformData)
}



