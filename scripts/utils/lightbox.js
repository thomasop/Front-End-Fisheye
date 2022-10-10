function open() {
    const photographerPictures = document.querySelectorAll(".galerie__img");
    photographerPictures.forEach((photographerPicture) => {
      photographerPicture.addEventListener('click', (picture) => {
        openLightbox(picture.target);
      });
    });
    const photographerVideos = document.querySelectorAll(".galerie__video");
    photographerVideos.forEach((photographerVideo) => {
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
    const video = document.createElement('video');
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
  var arrayPicture = [];
  const lightModal = document.getElementById("lightbox-modal");
  const currentPicture = document.querySelector(".lightbox-img");
  allPicture.forEach((allPicture) => {
    arrayPicture.push(allPicture)
  });
  for (i = 0; i < arrayPicture.length; i++) {
    if (currentPicture.getAttribute("alt") == arrayPicture[i].alt) {
      lightModal.removeChild(lightModal.lastChild);
        if (i == arrayPicture.length -1 ) {
          if (arrayPicture[0].lastChild == null) {
            let img = document.createElement("img");
            img.setAttribute("src", arrayPicture[0].getAttribute("src"));
            img.setAttribute("alt", arrayPicture[0].getAttribute("alt"));
            img.setAttribute("class", "lightbox-img");
            lightModal.appendChild(img);
          } else {
            const videoSrc = arrayPicture[0].firstChild;
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
        } else {
          if (arrayPicture[i + 1].lastChild == null) {
            let img = document.createElement("img");
            img.setAttribute("src", arrayPicture[i + 1].getAttribute("src"));
            img.setAttribute("alt", arrayPicture[i + 1].getAttribute("alt"));
            img.setAttribute("class", "lightbox-img");
            lightModal.appendChild(img);
          } else {
            const videoSrc = arrayPicture[i + 1].firstChild;
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
      } 
    }
  }
}

function beforeLightbox() {
  const allPicture = document.querySelectorAll(".galerie > * > :first-child");
  var arrayPicture = [];
  const lightModal = document.getElementById("lightbox-modal");
  const currentPicture = document.querySelector(".lightbox-img");
  allPicture.forEach((allPicture) => {
    arrayPicture.push(allPicture)
  });
  for (i = 0; i < arrayPicture.length; i++) {
    if (currentPicture.getAttribute("alt") == arrayPicture[i].alt) {
      lightModal.removeChild(lightModal.lastChild);
      if (i == 0) {
        if (arrayPicture[arrayPicture.length - 1].lastChild == null) {
          let img = document.createElement("img");
          img.setAttribute("src", arrayPicture[arrayPicture.length - 1].getAttribute("src"));
          img.setAttribute("alt", arrayPicture[arrayPicture.length - 1].getAttribute("alt"));
          img.setAttribute("class", "lightbox-img");
          lightModal.appendChild(img);
        } else {
          const videoSrc = arrayPicture[arrayPicture.length - 1].firstChild;
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
      } else {
        if (arrayPicture[i - 1].lastChild == null) {
          let img = document.createElement("img");
          img.setAttribute("src", arrayPicture[i - 1].getAttribute("src"));
          img.setAttribute("alt", arrayPicture[i - 1].getAttribute("alt"));
          img.setAttribute("class", "lightbox-img");
          lightModal.appendChild(img);
        } else {
          const videoSrc = arrayPicture[i - 1].firstChild;
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
      } 
    }
  }
}
