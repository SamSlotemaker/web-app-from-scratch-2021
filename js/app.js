/* spotify api's: https://developer.spotify.com/documentation/web-api/reference/#category-tracks */
/* endpoint creator: https://developer.spotify.com/console/get-new-releases/?country=SE&limit=100&offset=10 */


fetch('https://api.spotify.com/v1/browse/new-releases?country=NL&limit=50&offset=5', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer BQBQIWjK8BHWcRi1O9fzWmbYBsgy8eKXZiJFXL183waHgvWfCtvIPYxO45RcjM78qm_T4fBJfU4TfCN69VNjzH9EyEN3f-JEVe934Wkktpm1gV_JDj6_XDr-_zBfyX9AfvHVK0Kj7kfkkYZEvdrno8c09-GE2BBeuTE"
    }
}).then(response => {
    return response.json()
}).then(data => {
    const albumsList = data.albums.items
    console.log(albumsList)

    for (let i = 0; i < 10; i++) {
        const artist = albumsList[i].artists[0].name
        const album = albumsList[i].name
        const imageURL = albumsList[i].images[0].url
        console.log(`artiest: ${albumsList[i].artists[0].name}`)
        console.log(`album: ${albumsList[i].name}`)

        //insert album article
        let albumSection = document.querySelector('.albums')
        let albumArticle = document.createElement('article')
        albumSection.appendChild(albumArticle)

        //insert album text to new heading
        let albumHeading = document.createElement('h2')
        var albumsHeadingText = document.createTextNode(album)
        albumHeading.appendChild(albumsHeadingText)
        albumArticle.appendChild(albumHeading)

        //insert artist text to new heading
        let artistHeading = document.createElement('h3')
        var artistHeadingText = document.createTextNode(artist)
        artistHeading.appendChild(artistHeadingText)
        albumArticle.appendChild(artistHeading)

        //insert album cover (image)
        let albumCoverImageElement = document.createElement('img')
        albumCoverImageElement.src = imageURL
        albumArticle.appendChild(albumCoverImageElement)


    }


}
);