import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-portfolio');

  projects = [
    {
      projName: "project 1",
      img: "assets/about-img.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime voluptatibus harum iure similique animi quo tempore atque deserunt autem!",
      liveLink: "#",
      githubLink: "#"
    },
    { 
      projName: "project 2",
      img: "assets/about-img.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime voluptatibus harum iure similique animi quo tempore atque deserunt autem!",
      liveLink: "#",
      githubLink: "#",
    },
    { 
      projName: "project 3",
      img: "assets/about-img.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime voluptatibus harum iure similique animi quo tempore atque deserunt autem!",
      liveLink: "#",
      githubLink: "#",
    },
  ]

}
