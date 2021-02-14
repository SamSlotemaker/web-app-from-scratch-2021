const baseURL = "https://api.rawg.io/api/"

export const getData = async (subject, query) => {
    let response;
    response = query ? await fetch(baseURL + subject + query) : await fetch(baseURL + subject)
    const data = await response.json()

    return data
}
