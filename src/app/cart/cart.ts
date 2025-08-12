import { Component } from '@angular/core';
import { CartService } from '../service/cart-service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { trigger, state, style, animate, transition, } from '@angular/animations';

declare var Swal: any;
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

  openPayment(): void {
    const cartItems = this.cartService.GetCartItems();
    const anySelected = cartItems.some(item => item.is_selected);

    if (!anySelected) {
      Swal.fire({
        icon: 'warning',
        title: 'No product selected',
        text: 'Please select at least one product before checkout.'
      });
      return;
    }

    // Trigger CSS animation
    this.showPaymentPopup = false;
    setTimeout(() => {
      this.showPaymentPopup = true;
    }, 10);
  }

  closePayment(): void {
    this.showPaymentPopup = false;
  }
  submitPayment(form: any): void {
    if (form.invalid) return;
    this.cartService.clearSelectedItems();
    this.showPaymentPopup = false;


    Swal.fire({
      icon: 'success',
      title: 'Payment Successful',
      text: 'Thank you for your purchase!'
    });
  }
  getSelectedTotal(): number {
    return this.cartService.GetCartItems()
      .filter(item => item.is_selected && item.qty > 0)
      .reduce((total, item) => total + item.price * item.qty, 0);
  }
  getSelectedItems() {
    return this.cartService.GetCartItems().filter(i => i.is_selected);
  }

}