import { filterGenres } from "../utils/genres.js";


//returns HTML of a form width genre radios
export function createGenreFilter(data) {
    const genres = filterGenres(data)
    let genreRadioElements = ''
    //get chosenFilter
    let chosenFilter = JSON.parse(localStorage.getItem('FILTER'))
    genres.forEach(genre => {
        //check if the radio needs to be checked when a certain filter is chosen
        if (chosenFilter === genre) {
            genreRadioElements += `<input name='genres' value="${genre}" id="${genre}" type="radio" checked/>
            <label for="${genre}">${genre}</label>
            `
        }
        else {
            genreRadioElements += `<input name='genres' value="${genre}" id="${genre}" type="radio"/>
            <label for="${genre}">${genre}</label>
            `
        }
    })

    //check of filter has been set to ALL and check radio if so
    let allRadio;
    if (chosenFilter === 'all') {
        allRadio = `<input name='genres' value="all" id="all" type="radio" checked/>`
    }
    else {
        allRadio = `<input name='genres' value="all" id="all" type="radio"/>`
    }

    //combine form
    let form = `
    <form>
    ${allRadio}
    <label for="all">All</label>
    ${genreRadioElements}</form> 
    `
    return form
}


