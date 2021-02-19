import { renderOverview } from '../render/pages/renderOverview.js'
import { renderDetail } from '../render/pages/renderDetails.js'

let chosenFilter = JSON.parse(localStorage.getItem('FILTER'))
if (!chosenFilter) {
    chosenFilter = 'all'
}

//router that gets called on page load and hash change
export function router() {
    const [hash, id] = cleanupHash(location.hash)
    //check hash in url
    switch (hash) {
        case '#overview':
            renderOverview(chosenFilter)
            break
        case '#game':
            renderDetail(id)
            break
        case 'root':
            renderOverview(chosenFilter)
            break
    }
}

//clean up hash, returns an array of 2 values: hash and id when available
function cleanupHash(hash) {
    // console.log(hash)
    if (hash === '') {
        return ['root']
    }
    return hash.split('/')

}

window.addEventListener('hashchange', router)