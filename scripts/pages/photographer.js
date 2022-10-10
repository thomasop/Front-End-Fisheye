//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    try{
        const response = await fetch('./data/photographers.json')
        const data = await response.json()
        return ({
            photographers: [...data.photographers],
            media: [...data.media]
        })
    }catch{
        console.log('error')
    }
}

async function displayData(photographers) {
    let str = new URLSearchParams(window.location.search);
    let id = str.get("id");
    const photographersSection = document.querySelector(".photograph-header");
    for (i = 0; i < photographers.length; i++) {
        if (parseInt(photographers[i].id) == parseInt(id)) {
            const photographerModel = factory(photographers[i], 'photographer');
            const userCardDOM = photographerModel.getUserCardDOM();
            //photographersSection.appendChild(userCardDOM);
        }
    }
};

async function displayMedia(name) {
    let str = new URLSearchParams(window.location.search);
    let id = str.get("id");
    const mediaSection = document.querySelector(".galerie");
    let arr = name;
    const mediaSelected = name.filter(function (media) {
        return media.photographerId === parseInt(id);
    });
    mediaSelected.forEach(element => {
        const photographerModel = factory(element, 'media');
        const userCardDOM = photographerModel.getUserCardDOM();
        //photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers, media } = await getPhotographers();
    displayData(photographers);
    displayMedia(media);

    open();
    like();
};

init();