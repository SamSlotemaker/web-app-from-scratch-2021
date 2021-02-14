import { getGenres } from "./gameList.js";


export async function genreForm() {
    const genres = await getGenres()
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

