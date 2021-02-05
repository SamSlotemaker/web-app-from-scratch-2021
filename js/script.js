let buttons = document.querySelectorAll('body>section>button')
console.log(buttons)

buttons.forEach(button => {
    button.addEventListener('click', openSection)
})

function openSection(e) {
    e.target.classList.toggle('openSection')
}