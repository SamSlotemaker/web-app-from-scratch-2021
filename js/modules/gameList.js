import { getData } from './api.js'
const baseURL = "https://api.rawg.io/api/"
const subject = 'games'
const query = '?page_size=10'
const gamesURL = "https://api.rawg.io/api/games?page_size=10"

export async function createGameList() {
    const data = await getData(baseURL + subject + query)
        .then(data => {
            const gameList = data.results
            console.log(gameList)
            const gamesArray = []
            gameList.forEach(game => {
                //insert game articles
                const gameElement =
                    `<article class="game">
                        <header>
                            <h2>${game.name}</h2>
                            <h3>Rating: ${game.rating}</h3>
                        </header>
                        <div class="thumbnail-container">
                            <a href='#game/${game.id}'>
                                <span>
                                    Details
                                </span>
                            </a>
                            <p class="genre">${game.genres[0].name}</p>
                            <img src="${game.background_image}" alt=""/>                       
                        </div>
                    </article>`
                gamesArray.push(gameElement)
            })
            return gamesArray
        }
        );
    return data
}