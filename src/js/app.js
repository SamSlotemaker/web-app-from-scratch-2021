import { overview, detail } from './modules/router.js'

routie('', overview)
routie('game/:id', detail)


