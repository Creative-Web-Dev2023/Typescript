import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  person: {
    readonly name:string | number;
    age: number;
    position?: string;
  } = {
    name:"Flo",
    age: 30,
    position: "Developer"
  }
  // This will not cause an error because name can be a string or a number
  constructor() {
    this.person.position = "Developer"; 
  }
}
