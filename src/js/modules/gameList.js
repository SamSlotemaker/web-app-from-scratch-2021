import { getData } from './api.js'
const subject = 'games'
const query = '?page_size=10'

//return array of articles with games
export async function getGames() {
    const data = await getData(subject + query)
    return data
}

export async function getGenres() {
    const games = await getGames()
    const gameList = games.results
    const genreList = gameList.map(game => game.genres[0].name)
    const uniqueGenres = [...new Set(genreList)]
    return uniqueGenres;
}


export async function createGameList(genre) {
    return getGames().then(data => {
        const gameList = data.results
        const gamesArray = []

        let filteredGameList;

        // als er gefilterd is
        if (genre === 'all') {
            filteredGameList = gameList
        }
        else {
            filteredGameList = gameList.filter(game => {
                return game.genres[0].name === genre
            })
        }


        filteredGameList.forEach(game => {
            let gameGenre;
            if (!game.genres[0]) {
                gameGenre = 'Geen'
            }
            else {
                gameGenre = game.genres[0].name
            }

            //insert game articles
            const gameElement =
                `<article class="game">
                    <a href='#game/${game.id}'>
                        <header>
                            <h2>${game.name}</h2>
                            <h3>Rating: ${game.rating}</h3>
                        </header>
                      
                            <p class="genre">${gameGenre}</p>
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
}
