function openPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = "block";
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = "none";
}


$(document).ready(function() {
  var slideshow = document.querySelector(".slideshow");
  var imgs = slideshow.querySelectorAll("img");
  var currentImgIndex = 0;

  // Set the initial active image
  setActiveImage(currentImgIndex);

  // Add a click event listener to the prev button
  var prevBtn = document.querySelector(".prev-btn");
  prevBtn.addEventListener("click", function() {
    currentImgIndex = (currentImgIndex - 1 + imgs.length) % imgs.length;
    setActiveImage(currentImgIndex);
  });

  // Add a click event listener to the next button
  var nextBtn = document.querySelector(".next-btn");
  nextBtn.addEventListener("click", function() {
    currentImgIndex = (currentImgIndex + 1) % imgs.length;
    setActiveImage(currentImgIndex);
  });

  // Set the active image based on the index
  function setActiveImage(index) {
    slideshow.style.backgroundImage = `url(${imgs[index].src})`;
  }
});
