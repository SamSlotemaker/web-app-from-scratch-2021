import { createGameList } from './modules/gameList.js'
import { createPlatformList } from './modules/platformList.js'

// createGameList()
(async function () {
    const gameSection = document.querySelector('.games')
    const platformSection = document.querySelector('.platforms')

    //insert games into gameSection
    const gameList = await createGameList()
    gameList.forEach(game => {
        gameSection.insertAdjacentHTML('beforeend', game)
    })

    const platformList = await createPlatformList()
    platformList.forEach(platform => {
        platformSection.insertAdjacentHTML('beforeend', platform)
    })

})()