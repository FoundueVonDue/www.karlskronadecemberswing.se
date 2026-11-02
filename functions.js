/* Make menu content visible when clicking */
function viewMenuContent() {
    document.getElementById("menu-content").classList.toggle("show");
}





let n = 0;


function expandMenu() {


  if(n==0){

  document.getElementById("menu-content").style.fontSize = "18px";
  document.getElementById("menu-content").style.width = "300px";

  n = 1
  
}else{

  document.getElementById("menu-content").style.fontSize = "0px";
  document.getElementById("menu-content").style.width = "0px";

  n = 0

}


}








document.getElementById("menu-content").addEventListener("touch", function (e) {
  e.stopPropagation();
});



/* Ensure the video plays only once it has fully loaded */

const video = document.getElementById("DecaVitas-video");

video.addEventListener("canplaythrough", function () {
  video.play();
}, { once: true });
