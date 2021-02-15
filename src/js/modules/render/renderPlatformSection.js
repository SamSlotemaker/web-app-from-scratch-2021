import { createPlatformList } from '../components/platformList.js'

//render platform list
export async function renderPlatformList() {
    const platformSection = document.querySelector('.platforms')

    //create platformlist
    const platformList = await createPlatformList()

    //add platformlist to html
    platformList.forEach(platform => {
        platformSection.insertAdjacentHTML('beforeend', platform)
    })
}