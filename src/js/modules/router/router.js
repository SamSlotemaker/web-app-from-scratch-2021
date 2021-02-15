import { overview } from '../render/overview.js'
import { detail } from '../render/details.js'
import '../../lib/routie.js'

export function router() {

    routie('game/:id', detail)
    routie('overview', function () {
        overview('all')
    })
    routie('*', function () {
        overview('all')
    })
}
