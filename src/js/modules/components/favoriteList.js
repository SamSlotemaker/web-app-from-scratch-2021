export function createFavoriteList(games) {
    return games.map(game => {
        return (`
        <li>
            <h3>${game.name}</h3>
        </li>
        `)
    })
}