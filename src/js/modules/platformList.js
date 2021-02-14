import { getData } from "./api.js"
const subject = 'platforms'
const query = '?ordering=-games_count'

//returns array of articles with platforms
export async function createPlatformList() {
    const data = await getData(subject + query).then(data => {
        const platformList = data.results

        return platformList.map(platform => {
            if (platform.image_background === null) {
                //black background when img is empty
                platform.image_background = 'https://cdn.webshopapp.com/shops/280017/files/350149255/990x600x1/image.jpg'
            }
            const platformElement =
                `<article class="platform">
                    <div class="image-overlay"></div>
                    <div class="overlay">
                        <h2>${platform.name}</h2>
                        <h3>Games: <span>${platform.games_count}</span></h3>
                    </div>
                    <img src="${platform.image_background}" alt=""/>
                </article>`
            return platformElement
        })
    })
    return data
}
