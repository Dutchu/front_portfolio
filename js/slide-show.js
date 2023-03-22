console.log("hello world");
let thumbnails = document.getElementsByClassName("thumbnail");
let activeImages = document.getElementsByClassName("active");

for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("mouseover", function () {
    console.log(activeImages);
    if (activeImages.length > 0) {
      activeImages[0].classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("featured").src = this.src;
  });
}

let buttonRight = document.getElementById("slide-right");
let buttonLeft = document.getElementById("slide-left");

buttonLeft.addEventListener("click", function () {
  document.getElementById("slider").scrollRight += 180;
});

buttonRight.addEventListener("click", function () {
  document.getElementById("slider").scrollRight -= 180;
});
