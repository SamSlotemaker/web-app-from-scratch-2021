const baseURL = "https://api.rawg.io/api/"

export const getData = async (subject, query) => {
    if (query) {
        const response = await fetch(baseURL + subject + query)
    }
    const response = await fetch(baseURL + subject)
    const data = await response.json()
    return data
}