import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Person } from './interfaces/person.interfaces'; // Adjust the import path as necessary


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  person : Person = {
    name:"Flo",
    age: 30,
  }

  constructor() {
    this.person.name = 12; 
  }
}