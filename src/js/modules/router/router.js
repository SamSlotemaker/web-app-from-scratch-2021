import { overview } from '../render/overview.js'
import { detail } from '../render/details.js'

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
            overview(chosenFilter)
            break;
        case '#game':
            detail(id)
            break;
        case 'root':
            overview(chosenFilter)
            break;
    }
}

//clean up hash, returns an array of 2 values: hash and id when available
function cleanupHash(hash) {
    // console.log(hash)
    if (hash === '') {
        return ['root'];
    }
    const splittedHash = hash.split('/')
    return splittedHash;
}

window.addEventListener('hashchange', router)