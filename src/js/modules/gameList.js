import { getData } from './api.js'
const subject = 'games'
const query = '?page_size=10'

//return array of articles with games
export async function createGameList() {
    const data = await getData(subject + query)
        .then(data => {
            const gameList = data.results
            const gamesArray = []
            gameList.forEach(game => {
                //insert game articles
                const gameElement =
                    `<article class="game">
                    <a href='#game/${game.id}'>
                        <header>
                            <h2>${game.name}</h2>
                            <h3>Rating: ${game.rating}</h3>
                        </header>
                      
                            <p class="genre">${game.genres[0].name}</p>
                            <div class="thumbnail-container">               
                        
                        </div>   
                        <img src="${game.background_image}" alt=""/> 
                        </a>
                    </article>`
                gamesArray.push(gameElement)
            })
            return gamesArray
        }
        );
    return data
}