import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Slider } from './slider/slider';
import { Home } from './home/home';
import { Footer } from './footer/footer';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Slider,
    Home,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Product');
}
