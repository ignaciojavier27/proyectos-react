const URL_GET_IMG_CAT = "https://cataas.com/cat?json=true"
const URL_API_IMG_CAT = "https://cataas.com/cat"

export const getUrlOfImgCat = (threeFirstWords) => {
    return fetch(URL_GET_IMG_CAT)
    .then(res => res.json())
    .then(data => {
        const { _id } = data
        const newUrlImg = `${URL_API_IMG_CAT}/${_id}/says/${threeFirstWords}`
        return newUrlImg;
    })
}