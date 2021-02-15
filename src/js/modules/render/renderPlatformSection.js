import { createPlatformList } from '../components/platformList.js'

//render platform list
export function renderPlatformSection(data) {
    const platformSection = document.querySelector('.platforms')
    //create platformlist
    const platformList = createPlatformList(data)

    //add platformlist to html
    platformList.forEach(platform => {
        platformSection.insertAdjacentHTML('beforeend', platform)
    })
}