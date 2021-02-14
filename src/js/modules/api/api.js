const baseURL = "https://api.rawg.io/api/"

//fetching data and returning a json object
export const getData = async (subject, query) => {
    let url = baseURL + subject
    !query || (url += query) //add query to url when given

    const response = await fetch(url)
    const data = await response.json()
    return data
}

