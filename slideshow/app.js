const pictures = [
  {
    id: 1,
    path: "/slideshow/images/BingWallpaper (20).jpg",
    caption: "one",
  },
  {
    id: 2,
    path: "/slideshow/images/BingWallpaper (21).jpg",
    caption: "two",
  },
  {
    id: 3,
    path: "/slideshow/images/BingWallpaper (22).jpg",
    caption: "three",
  },
  {
    id: 4,
    path: "/slideshow/images/BingWallpaper (23).jpg",
    caption: "four",
  },
  {
    id: 5,
    path: "/slideshow/images/BingWallpaper (24).jpg",
    caption: "five",
  },
  {
    id: 6,
    path: "/slideshow/images/BingWallpaper (25).jpg",
    caption: "six",
  },
  {
    id: 7,
    path: "/slideshow/images/BingWallpaper (26).jpg",
    caption: "seven",
  },
];
let slideIndex = 0;
if (localStorage.getItem("slideIndex") == null) {
  localStorage.setItem("slideIndex", 5);
} else {
  slideIndex = parseInt(localStorage.getItem("slideIndex"));
}
const setColorArray = document.querySelector(".colors");
for (let i = 0; i < pictures.length; i++) {
  let div = document.createElement("div");
  div.classList.add("colorChange");
  setColorArray.append(div);
}

const arrow = document.querySelectorAll(".arrow");
const picture = document.querySelector(".image");
const pictureNumber = document.querySelectorAll(".span");
const caption = document.querySelector(".captionNumber");
const color = document.querySelectorAll(".colorChange");

pictureNumber[1].textContent = pictures.length;

setPage();

arrow.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (index === 0) {
      goToPreviousSlide();
    } else {
      goToNextSlide();
    }
  });
});

function goToPreviousSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = pictures.length - 1;
  }
  localStorage.setItem("slideIndex", slideIndex);
  setPage();
  setImage();
}
function goToNextSlide() {
  slideIndex++;
  if (slideIndex >= pictures.length) {
    slideIndex = 0;
  }
  localStorage.setItem("slideIndex", slideIndex);
  setPage();
  setImage();
}

function setPage() {
  setImage();
  color.forEach((element, index) => {
    element.addEventListener("click", () => {
      color[slideIndex].classList.remove("changeColor");
      slideIndex = index;
      localStorage.setItem("slideIndex", slideIndex);
      setImage();
      changeMyColor();
    });
    function changeMyColor() {
      if (index === slideIndex) {
        element.classList.add("changeColor");
      } else {
        element.classList.remove("changeColor");
      }
    }
    changeMyColor();
  });
}

function setImage() {
  let currentPicture = pictures[slideIndex].path;
  caption.textContent = pictures[slideIndex].caption;
  pictureNumber[0].textContent = pictures[slideIndex].id;
  picture.style.backgroundImage = `url('${currentPicture}')`;
}
