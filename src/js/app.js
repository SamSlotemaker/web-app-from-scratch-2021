import { overview } from './modules/render/overview.js'
import { router } from './modules/router/router.js'


//get chosen filter
let chosenFilter = JSON.parse(localStorage.getItem('FILTER'))

//if the user has filtered before
if (chosenFilter) {
    overview(chosenFilter)
}
//first time loading page
else {
    overview('all')
}
router()


