function open() {
    const photographerPictures = document.querySelectorAll(".galerie__img");
    photographerPictures.forEach((photographerPicture) => {
      photographerPicture.addEventListener('click', (picture) => {
        openLightbox(picture.target);
      });
      photographerPicture.addEventListener('keydown', (picture) => {
        if(picture.key == 'Enter') {
          openLightbox(picture.target);
        }
      })
    });
    const photographerVideos = document.querySelectorAll(".galerie__video");
    photographerVideos.forEach((photographerVideo) => {
      photographerVideo.addEventListener('click', (video) => {
        openLightbox(video.target);
      });
      photographerVideo.addEventListener('keydown', (video) => {
        if(video.key == 'Enter') {
          openLightbox(video.target);
        }
      })
    });
}

// Ouverture de la ligthbox
function openLightbox(media) {
  document.querySelector("header").style.display = "none";
  document.querySelector(".photograph-header").style.display = "none";
  document.querySelector(".media-sort").style.display = "none";
  document.querySelector(".galerie").style.display = "none";
  ligthboxKeydown();
  if (media.lastChild == null) {
    const lightbox = document.getElementById("lightbox");
    const lightModal = document.getElementById("lightbox-modal");
    let img = document.createElement("img");
    img.setAttribute("src", media.src);
    img.setAttribute("alt", media.alt);
    img.setAttribute("class", "lightbox-img");
    lightModal.appendChild(img);
    lightbox.style.display = "block";
  } else {
    const videoSrc = media.firstChild;
    const lightbox = document.getElementById("lightbox");
    const lightModal = document.getElementById("lightbox-modal");
    lightboxVideo(media, lightModal);
    lightbox.style.display = "block";
  }
}

// Fermeture de la ligthbox
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightModal = document.getElementById("lightbox-modal");
  lightModal.removeChild(lightModal.lastChild);
  lightbox.style.display = "none";
  document.querySelector("header").style.display = "flex";
  document.querySelector(".photograph-header").style.display = "flex";
  document.querySelector(".media-sort").style.display = "flex";
  document.querySelector(".galerie").style.display = "grid";
}

// Média suivant dans la lightbox
function nextLightbox() {
  const allPicture = document.querySelectorAll(".galerie > * > :first-child");
  const lightModal = document.getElementById("lightbox-modal");
  const currentPicture = document.querySelector(".lightbox-img");
  for (i = 0; i < allPicture.length; i++) {
    if (currentPicture.getAttribute("alt") == allPicture[i].alt) {
      lightModal.removeChild(lightModal.lastChild);
        if (i == allPicture.length -1 ) {
          if (allPicture[0].lastChild == null) {
            lightboxImg(allPicture[0], lightModal);
          } else {
            lightboxVideo(allPicture[0], lightModal);
          }
        } else {
          if (allPicture[i + 1].lastChild == null) {
            lightboxImg(allPicture[i + 1], lightModal);
          } else {
            lightboxVideo(allPicture[i + 1], lightModal);
        }
      } 
    }
  }
}

// Média précédant dans la lightbox
function previousLightbox() {
  const allPicture = document.querySelectorAll(".galerie > * > :first-child");
  const lightModal = document.getElementById("lightbox-modal");
  const currentPicture = document.querySelector(".lightbox-img");
  for (i = 0; i < allPicture.length; i++) {
    if (currentPicture.getAttribute("alt") == allPicture[i].alt) {
      lightModal.removeChild(lightModal.lastChild);
      if (i == 0) {
        if (allPicture[allPicture.length - 1].lastChild == null) {
          lightboxImg(allPicture[allPicture.length - 1], lightModal);
        } else {
          lightboxVideo(allPicture[allPicture.length - 1], lightModal);
        }
      } else {
        if (allPicture[i - 1].lastChild == null) {
          lightboxImg(allPicture[i - 1], lightModal);
        } else {
          lightboxVideo(allPicture[i - 1], lightModal);
        }
      } 
    }
  }
}

// Création du DOM image
function lightboxImg (arrayPicture, lightModal) {
  let img = document.createElement("img");
  img.setAttribute("src", arrayPicture.getAttribute("src"));
  img.setAttribute("alt", arrayPicture.getAttribute("alt"));
  img.setAttribute("class", "lightbox-img");
  lightModal.appendChild(img);
}

// Création du DOM video
function lightboxVideo (arrayVideo, lightModal) {
  const videoSrc = arrayVideo.firstChild;
  let video = document.createElement("video");
  video.setAttribute("controls", "");
  video.setAttribute("class", "lightbox-img");
  video.setAttribute("aria-label", arrayVideo.ariaLabel);
  const source = document.createElement( 'source' );
  source.setAttribute("src", videoSrc.src);
  source.setAttribute("type", "video/mp4");
  const track = document.createElement( 'track' );
  track.setAttribute("label", "English");
  track.setAttribute("srclang", "en");
  video.appendChild(source);
  video.appendChild(track);
  lightModal.appendChild(video);
}

function ligthboxKeydown() {
  const lightboxClose = document.querySelector("#lightbox-close");
  lightboxClose.addEventListener('keydown', (e) => {
    if(e.key == 'Enter') {
      closeLightbox();
    }
  })
  const lightboxNext = document.querySelector("#lightbox-right");
  lightboxNext.addEventListener('keydown', (e) => {
    if(e.key == 'Enter') {
      nextLightbox();
    }
  })
  const lightboxBefore = document.querySelector("#lightbox-left");
  lightboxBefore.addEventListener('keydown', (e) => {
    if(e.key == 'Enter') {
      previousLightbox();
    }
  })
}