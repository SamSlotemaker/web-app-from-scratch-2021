import { renderOverviewContainer } from './renderOverviewContainer.js'
import { renderGameList, renderGenreForm } from './renderGameSection.js'
import { renderPlatformSection } from './renderPlatformSection.js'
import { clearElement } from '../utils/utils.js'
import { getGames } from '../api/getGames.js'
import { getPlatforms } from '../api/getPlatforms.js'
const mainContainer = document.querySelector('main')

const subjectGames = 'games'
const pageSize = '?page_size=20'

const subjectPlatforms = 'platforms'
const ordering = '?ordering=-games_count'

//create overview page
export async function overview(genre) {
    const gameData = await getGames(subjectGames, pageSize)
    const platformData = await getPlatforms(subjectPlatforms, ordering)

    localStorage.setItem('GAME_LIST', JSON.stringify(gameData))
    localStorage.setItem('PLATFORM_LIST', JSON.stringify(platformData))

    clearElement(mainContainer)
    renderOverviewContainer(mainContainer)
    renderGenreForm(gameData)
    renderGameList(gameData, genre)
    renderPlatformSection(platformData)
}



