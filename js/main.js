import Team from "./modules/TeamObject.js";

(() => {
    console.log('Connected');

    let button = document.querySelector("#scrollToTop");
    let hero = document.querySelector("#hero-full-screen");

    window.onscroll = function() {scroll()};

    function scroll() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.querySelector("#scrollToTop").style.display = "block";
        } else {
            document.querySelector("#scrollToTop").style.display = "none";
        }
    }
    
    function backToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera  
    }

    // video player starts here 

    let vidPlayer = document.querySelector('#trailer');
    let playBtn = document.querySelector('.play');
    let pauseBtn = document.querySelector('.pause');
    
    function playVideo() {
        if (vidPlayer.paused == true) {
            vidPlayer.play();
        }
    }

    function pauseVideo() {
        vidPlayer.pause();
    }
    
    button.addEventListener('click', backToTop);
    playBtn.addEventListener('click', playVideo);
    pauseBtn.addEventListener('click', pauseVideo)
})();