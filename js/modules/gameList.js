import { getData } from './api.js'
const gamesURL = "https://api.rawg.io/api/games?page_size=10"

export function createGameList() {
    return getData(gamesURL)
        .then(data => {
            const gameList = data.results
            const gameSection = document.querySelector('.games')

            gameList.forEach(game => {
                //insert game articles
                const gameAlbumElement =
                    `<article class="game">
                    <header>
                    <h2>${game.name}</h2>
                    <h3>Rating: ${game.rating}</h3>
                    </header>
                    <div class="thumbnail-container">
                        <a href='#'>
                            <span>
                                Details
                            </span>
                        </a>
                            <p class="genre">${game.genres[0].name}</p>
                            <img src="${game.background_image}" alt=""/>
                       
                    </div>
                </article>`
                gameSection.insertAdjacentHTML('beforeend', gameAlbumElement)
                return gameAlbumElement;
            })
        }
        );
}