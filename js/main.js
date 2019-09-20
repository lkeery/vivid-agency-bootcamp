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

    button.addEventListener('click', backToTop);
})();