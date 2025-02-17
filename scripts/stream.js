const videoSrc = document.querySelector(".video-container #videoFrame");
let animeName = localStorage.getItem("anime");
let animeTitle = document.querySelector("h1");
let animeDescription = document.querySelector("p");

if (animeName === "Summer Ghost") {
  videoSrc.src =
    "https://drive.google.com/file/d/1Sx1odIpr_ssz7ythWshnRw3LbOXYVgjq/preview";
  animeDescription.textContent =
    "Aoi, Ryo, and Tomoya—who come together to uncover the mystery of a ghost that appears during the summer. They seek to understand the tragic backstory of this spirit while confronting their own personal struggles. The movie touches on themes of loss, life, and the transient nature of time, blending elements of supernatural mystery with heartfelt moments of growth. With its beautiful animation and emotional depth, Summer Ghost explores the connection between the living and the deceased.";
} else if (animeName === "") {
  videoSrc.src = "";
}

animeTitle.textContent = animeName;
