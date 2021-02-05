import { getData } from "./api.js";
const oderedBy = '-games_count'
const platformsURL = 'https://api.rawg.io/api/platforms?ordering=' + oderedBy

export function createPlatformList() {
    getData(platformsURL).then(data => {
        const platformList = data.results
        console.log(platformList)
        const gameSection = document.querySelector('.platforms')

        platformList.forEach(platform => {
            //insert game articles

            if (platform.image_background === null) {
                platform.image_background = 'https://cdn.webshopapp.com/shops/280017/files/350149255/990x600x1/image.jpg'
            }
            const gameAlbumElement =
                `<article class="platform">
                    <div class="image-overlay"></div>
                    <div class="overlay">
                        <h2>${platform.name}</h2>
                        <h3>Games: <span>${platform.games_count}</span></h3>
                    </div>
                    <img src="${platform.image_background}" alt=""/>
                </article>`
            gameSection.insertAdjacentHTML('beforeend', gameAlbumElement)
        })
    })

}
