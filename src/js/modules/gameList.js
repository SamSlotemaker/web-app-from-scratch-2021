import { getGames } from './api.js'
const subject = 'games'
const query = '?page_size=10'

export async function createGameList(genre) {
    return getGames(subject, query).then(data => {
        // store gameList in localstorage
        localStorage.setItem('GAME_LIST', JSON.stringify(data))

        const gameList = data.results

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


        return filteredGameList.map(game => {
            let gameGenre;
            if (!game.genres[0]) {
                gameGenre = 'Geen'
            }
            else {
                gameGenre = game.genres[0].name
            }

            //insert game articles
            return (
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
                    </article>`)
        })

    }
    );
}
