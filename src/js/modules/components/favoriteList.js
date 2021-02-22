// creates listitems of favorite games sorted by rating
export function createFavoriteList(games) {
    let newArray = [...games]
    let sortedArray = newArray.sort((item1, item2) => item2.rating - item1.rating)
    return sortedArray.map(game => {
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