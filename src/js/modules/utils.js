export function clearElement(element) {
    element.innerHTML = ''
}
export function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

//check if game genre exists
export function checkGenreExisting(game) {
    if (!game.genres[0]) {
        return 'Geen'
    }
    else {
        return game.genres[0].name
    }
}
