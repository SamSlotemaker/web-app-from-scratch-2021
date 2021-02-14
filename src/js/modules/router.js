import { overview, detail } from './render.js'
import '../lib/routie.js'

export function router() {

    routie('game/:id', detail)
    routie('overview', function () {
        overview('all')
    })
}
