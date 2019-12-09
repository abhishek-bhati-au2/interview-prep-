
document.querySelector('.btnFullscreen').addEventListener('click', toggleFullScreen);

function toggleFullScreen(){
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen(); 
    }
  }

}