console.clear();

var slideDelay = 1.5;
var slideDuration = 0.3;

var slides = document.querySelectorAll(".mySlides");
var prevButton = document.querySelector("#leftbtn");
var nextButton = document.querySelector("#rightbtn");

var numSlides = slides.length;

for (var i = 0; i < numSlides; i++) {
  TweenLite.set(slides[i], {
    backgroundColor: Math.random() * 0xffffff,
    xPercent: i * 100
  });
}

var wrap = wrapPartial(-100, (numSlides - 1) * 100);
var timer = TweenLite.delayedCall(slideDelay, autoPlay);

var animation = TweenMax.to(slides, 1, {
  xPercent: "+=" + (numSlides * 100),
  ease: Linear.easeNone,
  paused: true,
  repeat: -1,
  modifiers: {
    xPercent: wrap
  }
});

var proxy = document.createElement("div");
TweenLite.set(proxy, { x: "+=0" });
var transform = proxy._gsTransform;
var slideAnimation = TweenLite.to({}, 0.1, {});
var slideWidth = 0;
var wrapWidth = 0;
resize();

var draggable = new Draggable(proxy, {
  trigger: ".slides-container",
  throwProps: true,
  onPress: updateDraggable,
  onDrag: updateProgress,
  onThrowUpdate: updateProgress,
  snap: {     
    x: snapX
  }
});

window.addEventListener("resize", resize);

prevButton.addEventListener("click", function() {
  animateSlides(1);
});

nextButton.addEventListener("click", function() {
  animateSlides(-1);
});

function updateDraggable() {
  
  timer.restart(true);
  slideAnimation.kill();
  this.update();
}

function animateSlides(direction) {
    
  timer.restart(true);
  slideAnimation.kill();
  
  var x = snapX(transform.x + direction * slideWidth);
  
  slideAnimation = TweenLite.to(proxy, slideDuration, {
    x: x,
    onUpdate: updateProgress
  });  
}

function autoPlay() {  
    
  if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
    timer.restart(true);
  } else {
    animateSlides(-1);
  }
}

function updateProgress() {  
  animation.progress(transform.x / wrapWidth);
}

function snapX(x) {
  return Math.round(x / slideWidth) * slideWidth;
}

function resize() {
  
  var norm = (transform.x / wrapWidth) || 0;
  
  slideWidth = slides[0].offsetWidth;
  wrapWidth = slideWidth * numSlides;
  
  TweenLite.set(proxy, {
    x: norm * wrapWidth
  });
  
  animateSlides(0);
  slideAnimation.progress(1);
}

function wrapPartial(min, max) {  
  var r = max - min;  
  return function(value) {
    var v = value - min;
    return ((r + v % r) % r) + min;
  }
}