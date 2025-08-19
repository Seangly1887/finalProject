import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../service/cart-service';
import { ProductList } from '../product-list/product-list';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ProductService } from '../service/product-service';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  animations: [
    trigger('toggleMenu', [
      state('closed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*',
        opacity: 1
      })),
      transition('closed <=> open', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})

export class Navbar {
  constructor(public cartService: CartService, public productService: ProductService) {

  }
  menuOpen = false;
  toggleNavbar() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }
}
