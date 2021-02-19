//overview container HTML
export function renderOverviewContainer(container) {
    const overviewContainer =
        `<h1>Most popular games</h1>
        <section>
            <h2>Favorites</h2>
            <p class="no-favorites-message">Je hebt geen favorieten</p>
            <ul class="favorites">
            </ul>
        </section>
        <section class="games-section">
            <h2>Games</h2>
            <div class="games">
                <article class="loading"></article>
                <article class="loading"></article>
                <article class="loading"></article>
                <article class="loading"></article>
                <article class="loading"></article>
                <article class="loading"></article>
            </div>  
        </section>
        <section>
            <h2>All platforms</h2>
            <div class="platforms">
            </div>
        </section>`

    container.insertAdjacentHTML('beforeend', overviewContainer)
}