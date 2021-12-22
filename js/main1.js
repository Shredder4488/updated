var counterRight = 0;
var counterLeft = 0;
var newImage = document.createElement("img");
var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");

const images = document.querySelector("#wrapper")


document.getElementById("rightbtn").addEventListener("click", () => {
  ++counterLeft;
  if(counterRight%3 == 0 && counterLeft%3 == 1){
    slide3.style.zIndex = 5;
    slide2.style.zIndex = 0;
    slide1.style.zIndex = 0;
    TweenLite.to(slide1, 1, {x: 600});
    TweenLite.to(slide2, 1, {x: -300});
    TweenLite.to(slide3, 1, {x: -300});
  }
  else if(counterRight%3 == 1 && counterLeft%3 == 2){
    slide3.style.zIndex = 5;
    slide2.style.zIndex = 0;
    slide1.style.zIndex = 0;
    TweenLite.to(slide1, 1, {x: 600});
    TweenLite.to(slide2, 1, {x: -300});
    TweenLite.to(slide3, 1, {x: -300});
  }
  else if(counterRight%3 == 2 && counterLeft%3 == 0){
    slide3.style.zIndex = 5;
    slide2.style.zIndex = 0;
    slide1.style.zIndex = 0;
    TweenLite.to(slide1, 1, {x: 600});
    TweenLite.to(slide2, 1, {x: -300});
    TweenLite.to(slide3, 1, {x: -300});
  }

  //Sequence 2
  else if(counterRight%3 == 0 && counterLeft%3 == 2){
    slide1.style.zIndex = 5;
    slide3.style.zIndex = 0;
    slide2.style.zIndex = 0;
    TweenLite.to(slide1, 1, {x: 300});
    TweenLite.to(slide2, 1, {x: 300});
    TweenLite.to(slide3, 1, {x: -600});
  }
  else if(counterRight%3 == 2 && counterLeft%3 == 1){
    slide1.style.zIndex = 5;
    slide3.style.zIndex = 0;
    slide2.style.zIndex = 0;
    TweenLite.to(slide1, 1, {x: 300});
    TweenLite.to(slide2, 1, {x: 300});
    TweenLite.to(slide3, 1, {x: -600});
  }

  //Reset
  else if(counterRight%3 == 0 && counterLeft%3 == 0){
    slide2.style.zIndex = 5;
    slide1.style.zIndex = 0;
    slide3.style.zIndex = -1;
    TweenLite.to(slide1, 1, {x: 0});
    TweenLite.to(slide2, 1, {x: 0});
    TweenLite.to(slide3, 1, {x: 0});
  }
  else if (counterRight%3 == 1 && counterLeft%3 == 1){
    slide2.style.zIndex = 5;
    slide1.style.zIndex = 0;
    slide3.style.zIndex = -1;
    TweenLite.to(slide1, 1, {x: 0});
    TweenLite.to(slide2, 1, {x: 0});
    TweenLite.to(slide3, 1, {x: 0});
  }
  else if (counterRight%3 == 2 && counterLeft%3 == 2){
    slide2.style.zIndex = 5;
    slide1.style.zIndex = 0;
    slide3.style.zIndex = -1;
    TweenLite.to(slide1, 1, {x: 0});
    TweenLite.to(slide2, 1, {x: 0});
    TweenLite.to(slide3, 1, {x: 0});
  }
  console.log("Right changed to = "+counterRight%3);
  console.log("Left changed to = "+counterLeft%3);
})


document.getElementById("leftbtn").addEventListener("click", () => {
  ++counterRight;
  if(counterRight%3 == 1 && counterLeft%3 == 0){
    slide1.style.zIndex = 5;
    slide3.style.zIndex = -1;
    slide2.style.zIndex = 0;
    TweenLite.to(slide1, 1, {x: 300});
    TweenLite.to(slide2, 1, {x: 300});
    TweenLite.to(slide3, 1, {x: -600});
  }
  else if(counterRight%3 == 2 && counterLeft%3 == 1){
    slide1.style.zIndex = 5;
    slide3.style.zIndex = -1;
    slide2.style.zIndex = 0;
    TweenLite.to(slide1, 1, {x: 300});
    TweenLite.to(slide2, 1, {x: 300});
    TweenLite.to(slide3, 1, {x: -600});
  }
  else if(counterRight%3 == 0 && counterLeft%3 == 2){
    slide1.style.zIndex = 5;
    slide3.style.zIndex = -1;
    slide2.style.zIndex = 0;
    TweenLite.to(slide1, 1, {x: 300});
    TweenLite.to(slide2, 1, {x: 300});
    TweenLite.to(slide3, 1, {x: -600});
  }

  //Sequence 2
  else if(counterRight%3 == 2 && counterLeft%3 == 0){
    slide3.style.zIndex = 5;
    slide2.style.zIndex = -1;
    slide1.style.zIndex = 0;
    TweenLite.to(slide1, 1, {x: 600});
    TweenLite.to(slide2, 1, {x: -300});
    TweenLite.to(slide3, 1, {x: -300});
  }
  else if(counterRight%3 == 1 && counterLeft%3 == 2){
    slide3.style.zIndex = 5;
    slide2.style.zIndex = -1;
    slide1.style.zIndex = 0;
    TweenLite.to(slide1, 1, {x: 600});
    TweenLite.to(slide2, 1, {x: -300});
    TweenLite.to(slide3, 1, {x: -300});
  }
  else if(counterRight%3 == 0 && counterLeft%3 == 1){
    slide3.style.zIndex = 5;
    slide2.style.zIndex = -1;
    slide1.style.zIndex = 0;
    TweenLite.to(slide1, 1, {x: 600});
    TweenLite.to(slide2, 1, {x: -300});
    TweenLite.to(slide3, 1, {x: -300});
  }

  //Reset
  else if(counterRight%3 == 1 && counterLeft%3 == 1){
    slide2.style.zIndex = 5;
    slide1.style.zIndex = -1;
    slide3.style.zIndex = 0;
    TweenLite.to(slide1, 1, {x: 0});
    TweenLite.to(slide2, 1, {x: 0});
    TweenLite.to(slide3, 1, {x: 0});
  }
  else if(counterRight%3 == 2 && counterLeft%3 == 2){
    slide2.style.zIndex = 5;
    slide1.style.zIndex = -1;
    slide3.style.zIndex = 0;
    TweenLite.to(slide1, 1, {x: 0});
    TweenLite.to(slide2, 1, {x: 0});
    TweenLite.to(slide3, 1, {x: 0});
  }
  else if(counterRight%3 == 0 && counterLeft%3 == 0){
    slide2.style.zIndex = 5;
    slide1.style.zIndex = -1;
    slide3.style.zIndex = 0;
    TweenLite.to(slide1, 1, {x: 0});
    TweenLite.to(slide2, 1, {x: 0});
    TweenLite.to(slide3, 1, {x: 0});
  }
  console.log("Right changed to = "+counterRight%3);
  console.log("Left changed to = "+counterLeft%3);
})

