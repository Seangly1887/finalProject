import { Component, OnInit } from '@angular/core';
import { ProductList } from "../product-list/product-list";
import { Slider } from "../slider/slider";
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [ProductList, Slider, Footer],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  constructor(public cartService: CartService, public productService: ProductService) {

  }
  ngOnInit() {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      this.Cart_item = JSON.parse(cartItems);
    }
  }
  Cart_item: any[] = [];
  AddToProductCart(product: any) {

    this.cartService.AddCart(product);
  }

}
