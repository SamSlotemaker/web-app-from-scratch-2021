import { overview } from '../render/overview.js'
import { detail } from '../render/details.js'
import '../../lib/routie.js'


export function router() {
    routie({
        'game/:id': detail,
        'overview': function () {
            overview('all')
        },
        '': function () {
            overview('all')
        }
    })
}
