import { renderOverviewContainer } from './renderOverviewContainer.js'
import { renderGameList, renderGenreForm } from './renderGameSection.js'
import { renderPlatformList } from './renderPlatformSection.js'
import { clearElement } from '../utils/utils.js'
import { getGames } from '../api/getGames.js'
const mainContainer = document.querySelector('main')

const subjectGames = 'games'
const pageSize = '?page_size=10'

//create overview page
export async function overview(genre) {
    const gameData = await getGames(subjectGames, pageSize)
    clearElement(mainContainer)
    renderOverviewContainer(mainContainer);
    renderGenreForm()
    renderGameList(gameData, genre);
    renderPlatformList();
}



