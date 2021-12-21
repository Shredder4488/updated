var slideIndex = 1;
 showDivs(slideIndex);
 function plusDivs(n) {
    var tween = gsap.to(".mySlides", {
        duration: 4, 
        x: 750, 
        rotation: 180, 
        ease: "none", 
        paused: false
      });
      
      // click handlers for controlling the tween instance...
      document.querySelector("#play").onclick = () => tween.play();
      document.querySelector("#restart").onclick = () => tween.restart();
     
  }
  
  // showDivs(slideIndex += n);
  // function showDivs(n) {
  //   var i;
  //   var x = document.getElementsByClassName("mySlides");
  //   if (n > x.length) {slideIndex = 1} if (n < 1) {slideIndex = x.length}for
  //   (i = 0; i < x.length; i++) {x[i].style.display = "none";}
  //   x[slideIndex-1].style.display = "block"; }