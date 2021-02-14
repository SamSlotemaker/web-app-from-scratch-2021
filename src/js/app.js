import { overview } from './modules/render/overview.js'
import { router } from './modules/router/router.js'
//calls router that will start the app

let chosenFilter = JSON.parse(localStorage.getItem('FILTER'))

if (chosenFilter) {
    overview(chosenFilter)
}
else {
    overview('all')
}
router()


