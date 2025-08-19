import { Component } from '@angular/core';
import { CartService } from '../service/cart-service';
import { ProductList } from "../product-list/product-list";
import { ProductService } from '../service/product-service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-prodcut-page',
  imports: [ProductList, RouterLink],
  templateUrl: './prodcut-page.html',
  styleUrl: './prodcut-page.css'
})
export class ProdcutPage {
  constructor(public cartService: CartService, public productService: ProductService) {

  }
  AddToProductCart(product: any) {
    this.cartService.AddCart(product);
  }
}
