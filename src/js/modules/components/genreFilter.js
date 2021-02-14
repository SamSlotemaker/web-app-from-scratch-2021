import { getGenres } from "../api/getGenres.js";
const subject = 'games'
const query = '?page_size=10'

//create a form width genre radios
export async function genreForm() {
    const genres = await getGenres(subject, query)
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

    let allRadio;
    if (chosenFilter === 'all') {
        allRadio = `<input name='genres' value="all" id="all" type="radio" checked/>`
    }
    else {
        allRadio = `<input name='genres' value="all" id="all" type="radio"/>`
    }

    let form = `
    <form>
    ${allRadio}
    <label for="all">All</label>
    ${genreRadioElements}</form> 
    `
    return form
}


