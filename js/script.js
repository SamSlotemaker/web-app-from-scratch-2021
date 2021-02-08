let buttons = document.querySelectorAll('body>main>section>button')
buttons.forEach(button => {
    button.addEventListener('click', openSection)
})

function openSection(e) {
    e.target.classList.toggle('openSection')
}