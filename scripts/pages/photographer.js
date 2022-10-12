//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers(id) {
    // Penser à remplacer par les données récupérées dans le json
    try{
        const response = await fetch('./data/photographers.json')
        const data = await response.json()
        const photographer = data.photographers.filter(function (dataPhotographer) {
            return dataPhotographer.id === parseInt(id);
        });
        const medias = data.media.filter(function (dataMedias) {
            return dataMedias.photographerId === parseInt(id);
        });
        return ({
            photographer: [...photographer],
            medias: [...medias]
        })
    }catch{
        console.log('error')
    }
}

async function displayData(photographer) {
    photographer.forEach(element => {
        const photographerModel = factory(element, 'photographer');
        const userCardDOM = photographerModel.getUserCardDOM();
    });
};

async function displayMedia(mediaSelected) {
    mediaSelected.forEach(element => {
        const photographerModel = factory(element, 'media');
        const userCardDOM = photographerModel.getUserCardDOM();
    });
}

async function displaySort(medias) {
    displayMedia(medias);
    open();
    like(medias);
    var mediaSort = document.getElementById("media-sort");
    mediaSort.addEventListener('input', function(event) {
        sortBy(medias)
    })
}

async function init() {
    // Récupère les datas des photographes
    let str = new URLSearchParams(window.location.search);
    let id = str.get("id");
    const { photographer, medias } = await getPhotographers(id);
    displayData(photographer);
    displaySort(medias);
};

init();