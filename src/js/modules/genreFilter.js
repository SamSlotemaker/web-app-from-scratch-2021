import { getGenres } from "./api.js";
const subject = 'games'
const query = '?page_size=10'

//create a form width genre radios
export async function genreForm() {
    const genres = await getGenres(subject, query)
    let genreRadioElements = ''
    genres.forEach(genre => {
        genreRadioElements += `<input name='genres' value="${genre}" id="${genre}" type="radio"/>
        <label for="${genre}">${genre}</label>
        `
    })

    let form = `
    <form>
    <input name='genres' value="all" id="all" type="radio"/>
    <label for="all">All</label>
    ${genreRadioElements}</form> 
    `
    return form
}

//check is there has been filtered
export function checkFiltering(array, filter) {
    if (filter === 'all') {
        return array
    }
    else {
        return array.filter(game => {
            return game.genres[0].name === filter
        })
    }
}
