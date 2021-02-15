export function renderOverviewContainer(container) {
    const overviewContainer =
        `<h1>Most popular games</h1>
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
    <div class="platforms"> </div>
</section>`

    container.insertAdjacentHTML('beforeend', overviewContainer)
}