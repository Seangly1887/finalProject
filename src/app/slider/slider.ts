import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [NgFor],
  templateUrl: './slider.html',
  styleUrl: './slider.css'
})
export class Slider {
  images: string[] = [
    'care.webp',
    'care.avif',
    'vasalin.png',
    'veavea.webp',


  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    // Optional: Auto slide
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // 3 seconds
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
