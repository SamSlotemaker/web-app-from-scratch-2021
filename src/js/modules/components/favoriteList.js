export function createFavoriteList(games) {
    return games.map(game => {
        return (`
        <li>
            <a href="#game/${game.id}">
                <img src="${game.background_image}">
                <div>
                    <h3>${game.name}</h3>
                    <strong>${game.rating}</strong>
                </div>
            </a>
        </li>
        `)
    })
}