function open() {
    const photographerPictures = document.querySelectorAll(".galerie__img");
    photographerPictures.forEach((photographerPicture) => {
      photographerPicture.addEventListener('click', (picture) => {
        openLightbox(picture.target);
      });
    });
    const photographerVideos = document.querySelectorAll(".galerie__video");
    photographerVideos.forEach((photographerVideo) => {
      console.log(photographerVideo)
      photographerVideo.addEventListener('click', (video) => {
        openLightbox(video.target);
      });
    });
    
}

function openLightbox(media) {
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

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightModal = document.getElementById("lightbox-modal");
  lightModal.removeChild(lightModal.lastChild);
  lightbox.style.display = "none";
}

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

function beforeLightbox() {
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

function lightboxImg (arrayPicture, lightModal) {
  let img = document.createElement("img");
  img.setAttribute("src", arrayPicture.getAttribute("src"));
  img.setAttribute("alt", arrayPicture.getAttribute("alt"));
  img.setAttribute("class", "lightbox-img");
  lightModal.appendChild(img);
}

function lightboxVideo (arrayVideo, lightModal) {
  const videoSrc = arrayVideo.firstChild;
  let video = document.createElement("video");
  video.setAttribute("controls", "");
  video.setAttribute("playinline", "");
  video.setAttribute("class", "lightbox-img");
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
