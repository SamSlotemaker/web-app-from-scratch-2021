const baseURL = 'https://api.rawg.io/api/'

//fetching data and returning a json object
export const getData = async (subject, query, KEY) => {
    try {
        let url = baseURL + subject
        !query || (url += query) //add query to url when given
        //check if key has been given to check localstorage
        let localStorageData
        if (KEY) {
            localStorageData = JSON.parse(localStorage.getItem(KEY))
            //return localstorage data if existing
            if (localStorageData) {
                return localStorageData
            }
        }
        //fetch data if not available local
        const response = await fetch(url)
        const data = await response.json()
        localStorage.setItem(KEY, JSON.stringify(data))
        return data
    }
    catch (err) {
        return new Error(err)
    }
}

