import { renderGameList } from '../render/partials/renderGameSection.js'

export function handleSearchForm(input, data) {
    let dataList = data.results
    input.addEventListener('keyup', () => {
        const filteredData = dataList.filter(item => {
            return item.name.toLowerCase().includes(input.value.toLowerCase())
        })
        data.results = filteredData
        renderGameList(data, 'all')
    })
}