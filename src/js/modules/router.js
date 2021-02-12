import { overview, detail } from './render.js'

export function router() {

    routie('game/:id', detail)
    routie('overview', overview)
}
