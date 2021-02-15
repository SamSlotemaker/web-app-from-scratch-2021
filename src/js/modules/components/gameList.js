import { checkFiltering } from '../utils/utils.js'
import { checkGenreExisting } from '../utils/utils.js'

// return array with game articles
export function createGameList(data, genre) {
    // store gameList in localstorage
    const gameList = data.results

    // check for filtering
    let filteredGameList;
    filteredGameList = checkFiltering(gameList, genre)

    return filteredGameList.map(game => {
        let gameGenre = checkGenreExisting(game);

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



