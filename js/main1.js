var slideIndex = 1;
var slide = document.getElementsByClassName("mySlides")
var counterVal = 0;


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
  if(counterVal<4)
  {
    counterVal = counterVal + 1;
    TweenLite.to(slide, 1, {x:counterVal*-300});
  }
  else
  {
    counterVal = 0;
    TweenLite.to(slide, 1, {x:0});
  }
  
})
  
  // showDivs(slideIndex += n);
  // function showDivs(n) {
  //   var i;
  //   var x = document.getElementsByClassName("mySlides");
  //   if (n > x.length) {slideIndex = 1} if (n < 1) {slideIndex = x.length}for
  //   (i = 0; i < x.length; i++) {x[i].style.display = "none";}
  //   x[slideIndex-1].style.display = "block"; }