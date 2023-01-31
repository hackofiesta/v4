const fs = require('fs');

const sponsors = [
  {
    name: "devfolio.svg",
    link: "",
    img: "./assets/imgs/sponsors/Diamond Sponsor/devfolio.svg",
    type: "Diamond Sponsor"
  },
  {
    name: "polygon.svg",
    link: "",
    img: "./assets/imgs/sponsors/Diamond Sponsor/polygon.svg",
    type: "Diamond Sponsor"
  },
  // **************************************************
  {
    name: "celo.png",
    link: "",
    img: "./assets/imgs/sponsors/Platinum Sponsor/celo.png",
    type: "Platinum Sponsor"
  },
  {
    name: "felvin.png",
    link: "",
    img: "./assets/imgs/sponsors/Platinum Sponsor/felvin.png",
    type: "Platinum Sponsor"
  },
  {
    name: "filecoin.png",
    link: "",
    img: "./assets/imgs/sponsors/Platinum Sponsor/filecoin.png",
    type: "Platinum Sponsor"
  },
  {
    name: "koii.png",
    link: "",
    img: "./assets/imgs/sponsors/Platinum Sponsor/koii.png",
    type: "Platinum Sponsor"
  },
  {
    name: "tezos.svg",
    link: "",
    img: "./assets/imgs/sponsors/Platinum Sponsor/tezos.svg",
    type: "Platinum Sponsor"
  },
  // **************************************************
  {
    name: "blogadda.png",
    link: "",
    img: "./assets/imgs/sponsors/Blogging Outreach Partner/blogadda.png",
    type: "Blogging Outreach Partner"
  },
  // **************************************************
  {
    name: "giveMyCertificate.png",
    link: "",
    img: "./assets/imgs/sponsors/Certificate Partner/giveMyCertificate.png",
    type: "Certificate Partner"
  },
  // **************************************************
  {
    name: "GDSCIIITL.png",
    link: "",
    img: "./assets/imgs/sponsors/Community Partner/GDSCIIITL.png",
    type: "Community Partner"
  },
  {
    name: "TET.png",
    link: "",
    img: "./assets/imgs/sponsors/Community Partner/TET.png",
    type: "Community Partner"
  },
  // **************************************************
  {
    name: "github.png",
    link: "",
    img: "./assets/imgs/sponsors/Gold Sponsor/github.png",
    type: "Gold Sponsor"
  },
  // **************************************************
  {
    name: "noticeBard.png",
    link: "",
    img: "./assets/imgs/sponsors/Media Partner/noticeBard.png",
    type: "Media Partner"
  },
  // **************************************************
  {
    name: "hoverRobotix.png",
    link: "",
    img: "./assets/imgs/sponsors/Outreach Partner/hoverRobotix.png",
    type: "Outreach Partner"
  },
  {
    name: "mentorX.png",
    link: "",
    img: "./assets/imgs/sponsors/Outreach Partner/mentorX.png",
    type: "Outreach Partner"
  },
  // **************************************************
  {
    name: "BChainDynamics.png",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/BChainDynamics.png",
    type: "Past Sponsors"
  },
  {
    name: "codeflow.jpg",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/codeflow.jpg",
    type: "Past Sponsors"
  },
  {
    name: "codehours.jpg",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/codehours.jpg",
    type: "Past Sponsors"
  },
  {
    name: "cSharpCorner.png",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/cSharpCorner.png",
    type: "Past Sponsors"
  },
  {
    name: "dailybot.png",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/dailybot.png",
    type: "Past Sponsors"
  },
  {
    name: "digitalocean.svg",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/digitalocean.svg",
    type: "Past Sponsors"
  },
  {
    name: "echoAR.webp",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/echoAR.webp",
    type: "Past Sponsors"
  },
  {
    name: "egghead.png",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/egghead.png",
    type: "Past Sponsors"
  },
  {
    name: "gfg.png",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/gfg.png",
    type: "Past Sponsors"
  },
  {
    name: "Hackathons International.png",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/Hackathons International.png",
    type: "Past Sponsors"
  },
  {
    name: "interviewCake.png",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/interviewCake.png",
    type: "Past Sponsors"
  },
  {
    name: "lumos.png",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/lumos.png",
    type: "Past Sponsors"
  },
  {
    name: "portis.svg",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/portis.svg",
    type: "Past Sponsors"
  },
  {
    name: "replit.svg",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/replit.svg",
    type: "Past Sponsors"
  },
  {
    name: "RStudio.png",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/RStudio.png",
    type: "Past Sponsors"
  },
  {
    name: "sashido.png",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/sashido.png",
    type: "Past Sponsors"
  },
  {
    name: "the-girl-code.png",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/the-girl-code.png",
    type: "Past Sponsors"
  },
  {
    name: "wolfram.png",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/wolfram.png",
    type: "Past Sponsors"
  },
  {
    name: "yocket.png",
    link: "",
    img: "./assets/imgs/sponsors/Past Sponsors/yocket.png",
    type: "Past Sponsors"
  },
  // **************************************************
  {
    name: "1password.svg",
    link: "",
    img: "./assets/imgs/sponsors/Silver Sponsor/1password.svg",
    type: "Silver Sponsor"
  },
  {
    name: "balsamiq.png",
    link: "",
    img: "./assets/imgs/sponsors/Silver Sponsor/balsamiq.png",
    type: "Silver Sponsor"
  },
  {
    name: "roseneld.png",
    link: "",
    img: "./assets/imgs/sponsors/Silver Sponsor/roseneld.png",
    type: "Silver Sponsor"
  },
  {
    name: "taskade.png",
    link: "",
    img: "./assets/imgs/sponsors/Silver Sponsor/taskade.png",
    type: "Silver Sponsor"
  },
  {
    name: "termiusdb.png",
    link: "",
    img: "./assets/imgs/sponsors/Silver Sponsor/termiusdb.png",
    type: "Silver Sponsor"
  },
  {
    name: "voiceflow.svg",
    link: "",
    img: "./assets/imgs/sponsors/Silver Sponsor/voiceflow.svg",
    type: "Silver Sponsor"
  },
  {
    name: "xyz.png",
    link: "",
    img: "./assets/imgs/sponsors/Silver Sponsor/xyz.png",
    type: "Silver Sponsor"
  },
    // **************************************************
]

let content = '';

sponsors.forEach(sponsor => {
  const name = sponsor.name.split('.')[0].toUpperCase();
  content += `
  <li class="grid__item showcase__card">

                <div class="showcase__card__picture">
                  <a href="${sponsor.link}" target="_blank" rel="noopener noreferrer">
              
                    <img class="partial-image"
                      src="${sponsor.img}"
                      alt="${name}">
              
                  </a>
                </div>
              
                <div class=" showcase__card__footer">
                  <div>
              
                    <a href="${sponsor.link}" target="_blank">
                      <h2 class="showcase__card__footer__title">${name}</h2>
                    </a>
              
              
                    <a href="${sponsor.link}" target="_blank">
              
                      <h3 class="showcase__card__footer__author">${sponsor.type}</h3>
              
                    </a>
              
              
                  </div>
                  <a class="grid__item__link link--view" target="_blank" href="${sponsor.link}">
                    View
                    <svg viewBox="0 0 15 15" aria-hidden="true" class="icon--barba">
                      <!-- <use attr.xlink:href="assets/svg/sprite.svg#barba-external"></use> -->
                      <use xlink:href="#barba-external"></use>
                    </svg>
                  </a>
                </div>
              
              </li>
  `
})

fs.writeFile('./out.txt', content, err => {
  if (err) {
    console.error(err);
  }
});