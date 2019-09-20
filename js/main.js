import Team from "./modules/TeamObject.js";

(() => {
    console.log('Connected');

    const member = document.querySelector('.member-wrapper').children;

    function displayMember() {
        
        let currentMember = this.textContent;

        member[0].src = `images/${Team[currentMember].avatar}`;
        member[2].textContent = Team[currentMember].role;
        member[3].textContent = Team[currentMember].bio;
    }

    for (let member in Team) {
        console.log(member);

        let nextMemberToggle = document.querySelector('.memberToggle');

        nextMemberToggle.addEventListener('click', displayMember)
    }



    // video player starts here 

    let vidPlayer = document.querySelector('#trailer');
    let playBtn = document.querySelector('.playPause');
    let flScrn = document.querySelector('.flScreen');
    

    function pausePlay(){
        if (vidPlayer.paused == true){
          vidPlayer.play();
      
      
        } else {
          vidPlayer.pause();
        }
    }

    function fullScreenVideo(){
        if (vidPlayer.requestFullscreen) {
            vidPlayer.requestFullscreen();
          } else if (vidPlayer.mozRequestFullScreen) { /* Firefox */
            vidPlayer.mozRequestFullScreen();
          } else if (vidPlayer.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            vidPlayer.webkitRequestFullscreen();
          } else if (vidPlayer.msRequestFullscreen) { /* IE/Edge */
            vidPlayer.msRequestFullscreen();
          }
    }

    

    playBtn.addEventListener('click', pausePlay);
    flScrn.addEventListener('click', fullScreenVideo);


 


})();