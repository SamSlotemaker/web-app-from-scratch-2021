import { overview } from '../render/overview.js'
import { detail } from '../render/details.js'
import '../../lib/routie.js'

let chosenFilter = JSON.parse(localStorage.getItem('FILTER'))
if (!chosenFilter) {
    chosenFilter = 'all'
}

//routes and callbacks
export function router() {
    routie({
        'game/:id': detail,
        'overview': function () {
            overview(chosenFilter)
        },
        '': function () {
            overview(chosenFilter)
        }
    })
}
