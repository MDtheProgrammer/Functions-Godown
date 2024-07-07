import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    btnArray: any[] = [
      {btnName: "Drag & Drop",
        btnLink: "draganddrop",
        btnColor: "#" + Math.floor(Math.random()*1000000)
      },
      {btnName: "Talking Bot",
        btnLink: "/talkingbot",
        btnColor: "#" + Math.floor(Math.random()*1000000)
      }
    ]
}
