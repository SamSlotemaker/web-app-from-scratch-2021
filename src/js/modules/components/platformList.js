//returns array of articles with platforms
export function createPlatformList(data) {
    //add platformlist to localstorage
    const platformList = data.results

    return platformList.map(platform => {
        if (platform.image_background === null) {
            //black background when img is empty
            platform.image_background = 'https://cdn.webshopapp.com/shops/280017/files/350149255/990x600x1/image.jpg'
        }
        return (
            `<article class="platform">
                    <div class="image-overlay"></div>
                    <div class="overlay">
                        <h2>${platform.name}</h2>
                        <h3>Games: <span>${platform.games_count}</span></h3>
                    </div>
                    <img src="${platform.image_background}" alt=""/>
                </article>`
        )
    })
}
