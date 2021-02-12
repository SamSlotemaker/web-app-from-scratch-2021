import { getGenres } from "./gameList.js";


export async function genreForm() {
    const genres = await getGenres()
    console.log(genres)
    let genreRadioElements = ''
    genres.forEach(genre => {
        genreRadioElements += `<input name='genres' value="${genre}" id="${genre}" type="radio"/>
        <label for="${genre}">${genre}</label>
        `
        // genreRadioElements.push(genreRadioElement)
    })

    let form = `
    <form>${genreRadioElements}</form> 
    `
    return form
}

