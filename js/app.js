/* spotify api's: https://developer.spotify.com/documentation/web-api/reference/#category-tracks */
/* endpoint creator: https://developer.spotify.com/console/get-new-releases/?country=SE&limit=100&offset=10 */
// https://api.osrsbox.com/index.html

const url = "https://api.rawg.io/api/games?page_size=30"

getData(url)
    .then(data => {
        console.log(data)
        const gameList = data.results
        console.log(gameList[0])

        gameList.forEach(game => {
            const gameName = game.name
            const gameRating = game.rating
            const imageURL = game.background_image
            const primaryGenre = game.genres[0].name
            const gameSection = document.querySelector('.games')

            //insert game articles
            const gameAlbumElement =
                `<article class="game">
                <h2>${gameName}</h2>
                <h3>Rating: ${gameRating}</h3>
                <div class="thumbnail-container">
                <p class="genre">${primaryGenre}</p>
                <img src="${imageURL}" alt=""/>
                </div>
            </article>`
            gameSection.insertAdjacentHTML('beforeend', gameAlbumElement)
        })
    }
    );

function getData(url) {
    return fetch(url)
        .then(response => {
            return response.json()
        })
}
