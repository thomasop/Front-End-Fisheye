// Obtention d'un photographe et de ses médias graçe à l'id passé en URL
async function getPhotographers(id) {
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
            medias: [...medias],
        })
    }catch{
        console.log('error')
    }
}

// Affichage d'un photographe
async function displayPhotographer(photographer, medias) {
    var allLike = 0;
    medias.forEach(like => {
        allLike = allLike + like.likes;
    });
    photographer.forEach(element => {
        const photographerModel = factory(element, 'photographer', allLike);
        photographerModel.getUserCardDOM();
    });
};

// Affichage des différents médias d'un photographe
async function displayMedia(medias) {
    medias.forEach(element => {
        const photographerModel = factory(element, 'media');
        photographerModel.getUserCardDOM();
    });
    like(medias);
    openSort(medias);
    open();
}

// Affichage des différents médias trié d'un photographe
async function displayMediaSort(medias) {
    medias.forEach(element => {
        const photographerModel = factory(element, 'media');
        photographerModel.getUserCardDOM();
    });
    like(medias);
    open();
}

// Récupère les datas des photographes
async function init() {
    let str = new URLSearchParams(window.location.search);
    let id = str.get("id");
    const { photographer, medias } = await getPhotographers(id);
    await displayPhotographer(photographer, medias);
    await displayMedia(medias);
};

init();