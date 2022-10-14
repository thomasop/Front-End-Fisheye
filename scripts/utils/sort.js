function sortBy(array) {
    var activeBtn = document.querySelector(".media-sort__active");
    var sortIcon = document.querySelector(".media-sort img");
    activeBtn.addEventListener('click', function(event) {
        var lineWhite = document.querySelectorAll(".media-sort__div span");
        lineWhite.forEach((line) => {
            line.classList.add('sort-line');
        });
        
        sortIcon.classList.add("sort-icon");

        var hiddenBtn = document.querySelectorAll(".media-sort__hidden");
        hiddenBtn.forEach((btn) => {
            btn.classList.remove('media-sort__hidden');
        });
        activeBtn.classList.add('media-sort__hidden')
    })
    sort(array)
}

async function sort(array) {
    var allBtn = document.querySelectorAll(".media-sort__div > button[type='button']");
    allBtn.forEach((sortBtn) => {
        var sortIcon = document.querySelector(".media-sort img");
        
        sortIcon.addEventListener('click', function(test) {
            var lineWhite = document.querySelectorAll(".media-sort__div span");
            lineWhite.forEach((line) => {
                line.classList.remove('sort-line');
            });
            var activeBtn = document.querySelector(".media-sort__active");
            sortIcon.classList.remove("sort-icon");
            var hiddenBtn = document.querySelectorAll(".media-sort__div > button");
            hiddenBtn.forEach((btn) => {
                btn.classList.add('media-sort__hidden');
            });
            activeBtn.classList.remove('media-sort__hidden')
        })
        
        sortBtn.addEventListener('click', (sortr) => {
            if (sortr.path[0].textContent === "Titre") {
                array.sort(function (a, b) {
                    return a.title !== b.title ? a.title < b.title ? -1 : 1 : 0;
                });
                changeActiveBtn(sortr.path[0], allBtn)    
            } else if (sortr.path[0].textContent === 'Date') {
                array.sort(function (a, b) {
                    return new Date(b.date) - new Date(a.date);
                });  
                changeActiveBtn(sortr.path[0], allBtn)    
            } else if (sortr.path[0].textContent === 'Popularité') {
                
                array.sort(function (a, b) {
                    return parseFloat(b.likes) - parseFloat(a.likes);
                });        
                changeActiveBtn(sortr.path[0], allBtn) 
            }
            deleteMedia();
            displaySort(array)
        });
    });
}

function deleteMedia() {
    const mediaSection = document.querySelectorAll(".galerie > div");
    mediaSection.forEach((media) => {
        media.remove();
    });
}


async function changeActiveBtn(data, allBtn) {
    var activeBtn = document.querySelector(".media-sort__active");
    activeBtn.classList.remove("media-sort__hidden")
    activeBtn.textContent = data.textContent;
    var sortIcon = document.querySelector(".media-sort img");
    sortIcon.classList.remove("sort-icon");
    var lineWhite = document.querySelectorAll(".media-sort__div span");
    lineWhite.forEach((line) => {
        line.classList.remove('sort-line');
    });
    allBtn.forEach((btn) => {
        btn.classList.add('media-sort__hidden');
    });
}