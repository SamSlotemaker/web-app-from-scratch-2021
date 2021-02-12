const baseURL = "https://api.rawg.io/api/"

export const getData = async (subject, query) => {
    let response;
    if (query) {
        response = await fetch(baseURL + subject + query)
    }
    else {
        response = await fetch(baseURL + subject)
    }
    const data = await response.json()
    return data
}