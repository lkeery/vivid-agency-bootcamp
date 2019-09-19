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
})();