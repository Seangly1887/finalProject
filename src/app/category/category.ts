import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [RouterLink, NgFor],
  templateUrl: './category.html',
  styleUrl: './category.css'
})
export class Category {
  categories = [
    { name: 'Shoes', image: '/category/shoes.png' },
    { name: 'T-Shirt', image: '/category/T-Shirt.png' },
    { name: 'Skincare', image: '/category/skincare.webp' },
    { name: 'Accessories', image: '/category/pngtreejpg.jpg' },
    { name: 'Skincare', image: '/category/skincare.webp' },
    { name: 'Accessories', image: '/category/pngtreejpg.jpg' },
    { name: 'Skincare', image: '/category/skincare.webp' },
    { name: 'Accessories', image: '/category/pngtreejpg.jpg' },
    { name: 'Skincare', image: '/category/skincare.webp' },
    { name: 'Accessories', image: '/category/pngtreejpg.jpg' },
    { name: 'Skincare', image: '/category/skincare.webp' },
    { name: 'Accessories', image: '/category/pngtreejpg.jpg' },
    { name: 'Skincare', image: '/category/skincare.webp' },
    { name: 'Accessories', image: '/category/pngtreejpg.jpg' },
    { name: 'Skincare', image: '/category/skincare.webp' },
    { name: 'Accessories', image: '/category/pngtreejpg.jpg' },
    { name: 'Skincare', image: '/category/skincare.webp' },
    { name: 'Accessories', image: '/category/pngtreejpg.jpg' },
    { name: 'Skincare', image: '/category/skincare.webp' },
    { name: 'Accessories', image: '/category/pngtreejpg.jpg' },
    { name: 'Skincare', image: '/category/skincare.webp' },
    { name: 'Accessories', image: '/category/pngtreejpg.jpg' },
  ];



  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  startDrag(event: MouseEvent | TouchEvent, container: HTMLElement) {
    this.isDragging = true;
    this.startX = (event instanceof MouseEvent ? event.pageX : event.touches[0].pageX) - container.offsetLeft;
    this.scrollLeft = container.scrollLeft;
  }

  onDrag(event: MouseEvent | TouchEvent, container: HTMLElement) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = (event instanceof MouseEvent ? event.pageX : event.touches[0].pageX) - container.offsetLeft;
    const walk = (x - this.startX) * 1; // drag speed
    container.scrollLeft = this.scrollLeft - walk;
  }

  endDrag() {
    this.isDragging = false;
  }
}
