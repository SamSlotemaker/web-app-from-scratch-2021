import { overview, detail } from './render.js'

export function router() {
    routie('', overview)
    routie('overview', overview)
    routie('game/:id', detail)
}
