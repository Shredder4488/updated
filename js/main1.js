var slideIndex = 1;
var slide = document.getElementsByClassName("mySlides")
var counterVal = 1;


function plusDivs() {
  TweenLite.to(slide, 1, {x:counterVal*300});
  counterVal++;
  return counterVal
}

function minusDivs(){
  TweenLite.to(slide, 1, {x:-counterVal*300});
  counterVal--;
  return counterVal
}
  
  // showDivs(slideIndex += n);
  // function showDivs(n) {
  //   var i;
  //   var x = document.getElementsByClassName("mySlides");
  //   if (n > x.length) {slideIndex = 1} if (n < 1) {slideIndex = x.length}for
  //   (i = 0; i < x.length; i++) {x[i].style.display = "none";}
  //   x[slideIndex-1].style.display = "block"; }