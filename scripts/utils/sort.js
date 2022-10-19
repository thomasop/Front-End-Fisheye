// Ouverture des bouton pour trier
function openSort(array) {
  var activeBtn = document.querySelector(".media-sort__active");
  var sortIcon = document.querySelector(".media-sort img");

  activeBtn.addEventListener("click", function (event) {
    var lineWhite = document.querySelectorAll(".media-sort__div span");
    lineWhite.forEach((line) => {
      line.classList.add("sort-line");
    });

    sortIcon.classList.add("sort-icon");
    sortIcon.setAttribute("tabindex", "0");
    var hiddenBtn = document.querySelectorAll(".media-sort__hidden");
    hiddenBtn.forEach((btn) => {
      btn.classList.remove("media-sort__hidden");
    });
    activeBtn.classList.add("media-sort__hidden");
    sortIcon.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        // The Enter/Return key
        closeSort();
      }
    });
    sortIcon.addEventListener("click", function (e) {
      closeSort();
    });
  });
  sortBy(array);
}

// Trier les médias par
function sortBy(array) {
  var allBtn = document.querySelectorAll(
    ".media-sort__div > button[type='button']"
  );
  allBtn.forEach((sortBtn) => {
    sortBtn.addEventListener("click", (sortr) => {
      var mediaLike = searchMediaLike(array);
      if (sortr.path[0].textContent === "Titre") {
        array.sort(function (a, b) {
          return a.title !== b.title ? (a.title < b.title ? -1 : 1) : 0;
        });
        searchMediaLiked(array, mediaLike);
        changeDataBtn(sortr.path[0], allBtn);
      } else if (sortr.path[0].textContent === "Date") {
        array.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        searchMediaLiked(array, mediaLike);
        changeDataBtn(sortr.path[0], allBtn);
      } else if (sortr.path[0].textContent === "Popularité") {
        array.sort(function (a, b) {
          return parseFloat(b.likes) - parseFloat(a.likes);
        });
        searchMediaLiked(array, mediaLike);
        changeDataBtn(sortr.path[0], allBtn);
      }
      deleteMedia();
      displayMediaSort(array);
    });
  });
}

// Suppression des anciens médias
function deleteMedia() {
  const mediaSection = document.querySelectorAll(".galerie > div");
  mediaSection.forEach((media) => {
    media.remove();
  });
}

// Changement des données du bouton
function changeDataBtn(data) {
  var activeBtn = document.querySelector(".media-sort__active");
  activeBtn.textContent = data.textContent;
  closeSort();
}

// Fermeture des boutons pour trier
function closeSort() {
  var sortIcon = document.querySelector(".media-sort img");
  var lineWhite = document.querySelectorAll(".media-sort__div span");
  lineWhite.forEach((line) => {
    line.classList.remove("sort-line");
  });
  var activeBtn = document.querySelector(".media-sort__active");
  sortIcon.classList.remove("sort-icon");
  sortIcon.removeAttribute("tabindex");
  var hiddenBtn = document.querySelectorAll(".media-sort__div > button");
  hiddenBtn.forEach((btn) => {
    btn.classList.add("media-sort__hidden");
  });
  activeBtn.classList.remove("media-sort__hidden");
}

function searchMediaLike(array) {
  var mediaLike = document.querySelectorAll(".galerie__span");
  var liked = [];
  for (y = 0; y < array.length; y++) {
    if (
      array[y].likes == mediaLike[y].textContent - 1 &&
      mediaLike[y].id == array[y].id
    ) {
      liked.push(mediaLike[y]);
    }
  }
  return liked;
}

function searchMediaLiked(array, mediaLike) {
  mediaLike.forEach((like) => {
    editLike(like);
  });
  function editLike(like) {
    array.forEach((ar) => {
      if (ar.likes == like.textContent - 1 && like.id == ar.id) {
        ar.likes = like.textContent;
      }
    });
  }
}
