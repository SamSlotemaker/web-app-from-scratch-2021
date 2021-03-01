import { renderOverviewContainer } from '../partials/renderOverviewContainer.js'
import { renderGameList, renderGenreForm } from '../partials/renderGameSection.js'
import { renderPlatformSection } from '../partials/renderPlatformSection.js'
import { clearElement } from '../../utils/utils.js'
import { getData } from '../../api/api.js'
import { renderFavorites } from '../partials/renderFavorites.js'
import { handleSearchForm } from '../../utils/search.js'

const mainContainer = document.querySelector('main')
const subjectGames = 'games'
const subjectPlatforms = 'platforms'
const pageSize = '?page_size=20'
const page = '&page=1'
const pageQuery = pageSize + page
const ordering = '?ordering=-games_count'
const GAMES_KEY = 'GAME_LIST'
const PLATFORMS_KEY = 'PLATFORM_LIST'

//create overview page
export async function renderOverview(genre) {
    //clear element and create skeleton
    clearElement(mainContainer)
    renderOverviewContainer(mainContainer)
    renderFavorites()
    //fetch game and platform data
    const gameData = await getData(subjectGames, pageQuery, GAMES_KEY)
    const platformData = await getData(subjectPlatforms, ordering, PLATFORMS_KEY)
    //get searchform and handlefunction
    let searchInput = document.querySelector('input')
    handleSearchForm(searchInput, gameData)

    renderGenreForm(gameData)
    renderGameList(gameData, genre)
    renderPlatformSection(platformData)

}


