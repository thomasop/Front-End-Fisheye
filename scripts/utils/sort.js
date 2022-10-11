function sortBy(array) {
    var mediaSort = document.getElementById("media-sort");
    if (mediaSort.value === "Titre") {
        deleteMedia();
        sortByTitre(array);
    } else if (mediaSort.value === 'Date') {
        deleteMedia();
        sortByDate(array);
    } else if (mediaSort.value === 'Popularité') {
        deleteMedia();
        sortByPopularity(array);
    }
}

function sortByPopularity(array) {
    var newArray = array.sort(function (a, b) {
        return parseFloat(b.likes) - parseFloat(a.likes);
    });
    displayMedia(newArray);
}

function sortByDate(array) {
    var newArray = array.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });
    displayMedia(newArray);
}

function sortByTitre(array) {
    var newArray = array.sort(function (a, b) {
        return a.title !== b.title ? a.title < b.title ? -1 : 1 : 0;
    });
    displayMedia(newArray);
}

function deleteMedia() {
    const mediaSection = document.querySelectorAll(".galerie > div");
    mediaSection.forEach((media) => {
        media.remove();
    });
}