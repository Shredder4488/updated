var scroller = document.getElementById("scroller");
var slides = document.getElementsByClassName("mySlides")
var x = -600;
var i = 4;
var children = document.getElementById("scroller").childNodes;
var imageArray = ["img1/slide1.jpg", "img1/slide2.jpg", "img1/slide3.jpg", "img1/slide4.jpg", "img1/slide5.jpg"];


function createImgForward(){
  for(var j=0; j<=4; j++){
    var newImage = document.createElement("img");
    newImage.setAttribute("class", "mySlides");
    newImage.setAttribute("src", imageArray[j]);
    scroller.appendChild(newImage);
  }
}


function createImgBackward(){
    // var first = document.getElementById("scroller").firstElementChild;
    // var last = document.getElementById("scroller").lastChild;
    var newImage = document.createElement("img");
    newImage.setAttribute("class", "mySlides");
    newImage.setAttribute("src", imageArray[1]);
    document.getElementById("scroller").insertBefore(newImage, children[0]);
}


document.getElementById("rightbtn").addEventListener("click", ()=> {
  createImgForward()
  TweenLite.to(slides, 1, {x: x-=300});
})


document.getElementById("leftbtn").addEventListener("click", ()=> {
  TweenLite.to(slides, 1, {x: x+=300});
  imageArray.forEach(createImgBackward);
})