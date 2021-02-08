import { overview, detail } from './render.js'

export function router() {
    routie('', overview)
    routie('game/:id', detail)
}
