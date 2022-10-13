
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

async function displayMedia(medias) {
    sortBy(medias);
    medias.forEach(element => {
        const photographerModel = factory(element, 'media');
        const userCardDOM = photographerModel.getUserCardDOM();
    });
    open();
    like(medias);
}

async function displaySort(medias) {
    medias.forEach(element => {
        const photographerModel = factory(element, 'media');
        const userCardDOM = photographerModel.getUserCardDOM();
    });
    open();
    like(medias);
}

async function test(medias) {
    var hiddenBtn = document.querySelectorAll(".media-sort__hidden");
    hiddenBtn.forEach((btn) => {
        btn.classList.remove('media-sort__hidden');
    });
    sort(medias)
    
}

async function init() {
    // Récupère les datas des photographes
    let str = new URLSearchParams(window.location.search);
    let id = str.get("id");
    const { photographer, medias } = await getPhotographers(id);
    await displayData(photographer);
    await displayMedia(medias);
};

init();