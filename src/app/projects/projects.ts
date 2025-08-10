import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
    {
      projName: "Hope Language Center",
      img: "assets/lang-web.png",
      description:
        "🌐 Frontend Website This is a practice project where I implemented HTML, CSS, and JavaScript skills to build a fully responsive website",
      liveLink: "https://umernadim.github.io/hopeEngLangCenter/",
      githubLink: "https://github.com/umernadim/hopeEngLangCenter.git"
    },
    { 
      projName: "SunDown",
      img: "assets/sundown.png",
      description:
        "For sharpening my frontend skills I recreated real-world websites — here's a project where I built a copy of an original website as a practice exercise using HTML, CSS, Js and locomotive js.",
      liveLink: "https://umernadim.github.io/sundown-web/",
      githubLink: "https://github.com/umernadim/sundown-web.git",
    },
    { 
      projName: "FanoFan",
      img: "assets/fanofan.png",
      description:
        "FanoFan is a sleek, responsive frontend website showcasing modern fan designs, styles, and features, built with Html, Css, Js and Gsap.",
      liveLink: "https://umernadim.github.io/FanoFan-web/",
      githubLink: "https://github.com/umernadim/FanoFan-web.git",
    },
    { 
      projName: "TwoGoodCo.",
      img: "assets/two-goodCo.png",
      description:
        "This is a practice project where I created a simple drawing app using HTML, CSS, and JavaScript",
      liveLink: "https://umernadim.github.io/twoGoodCo/",
      githubLink: "https://github.com/umernadim/twoGoodCo.git",
    },
    { 
      projName: "Drawing-app",
      img: "assets/drawing-app.png",
      description:
        "This is a practice project where I created a simple drawing app using HTML, CSS, and JavaScript",
      liveLink: "https://umernadim.github.io/drawing_app/",
      githubLink: "https://github.com/umernadim/drawing_app.git",
    },
    { 
      projName: "Dice Game",
      img: "assets/dice-game.png",
      description:
        "A simple yet engaging Dice Game built with React JS to practice state management, user interaction, and component logic.",
      liveLink: "",
      githubLink: "https://github.com/umernadim/dice-game.git",
    },


  ]

}
