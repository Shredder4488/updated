var slideIndex = 1;
var slide = document.getElementsByClassName("mySlides")
var counterVal = 0;
var prevSlide = document.getElementById("previous")
var currentSlide = document.getElementById("current")
var nextSlide = document.getElementById("next")

const imageArr = ["slide1.jpg","slide2.jpg","slide3.jpg","slide4.jpg","slide5.jpg"];
const childImages = document.querySelector("#wrapper").childNodes;
var tempImg = "temporary address";

document.getElementById("leftbtn").addEventListener("click", () => {
  if(counterVal>1){
  counterVal = counterVal - 1;
  TweenLite.to(slide, 1, {x:-counterVal*300});
  }
  else
  {
    counterVal = 0;
    TweenLite.to(slide, 1, {x:0});
  }
})

document.getElementById("rightbtn").addEventListener("click", () => {
  counterVal = counterVal + 1;
  TweenLite.to(slide, 1, {x:counterVal*-300});
  for(i=0; i<=childImages.length; i++){
    tempImg = childImages[0];
    childImages[i-1] = childImages[i];
    childImages[childImages.length] = tempImg;
  }
})
