import { Component } from '@angular/core';
import { CartService } from '../service/cart-service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { trigger, state, style, animate, transition, } from '@angular/animations';


@Component({
  selector: 'app-cart',
  imports: [RouterLink, CurrencyPipe, FormsModule, NgFor, NgIf],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'scale(0.95)',
        })
      ),
      state(
        '*',
        style({
          opacity: 1,
          transform: 'scale(1)',
        })
      ),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class Cart {

  showPaymentPopup = false;

  constructor(public cartService: CartService) { }

  openPayment() {
    const cartItems = this.cartService.GetCartItems();
    const anySelected = cartItems.some(item => item.is_selected);

    if (!anySelected) {
      alert('Please select at least one product before checkout.');
      return;
    }

    // Delay to trigger CSS animation smoothly
    this.showPaymentPopup = false;
    setTimeout(() => {
      this.showPaymentPopup = true;
    }, 10);
  }

  closePayment() {
    this.showPaymentPopup = false;
  }

  submitPayment(form: any) {
    if (form.invalid) return;
    alert('Payment successful!');
    this.showPaymentPopup = false;
    this.cartService.clearSelectedItems();

  }
}