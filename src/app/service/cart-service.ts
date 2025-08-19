import { Injectable } from '@angular/core';
declare var Swal: any;



@Injectable({
  providedIn: 'root'
})
export class CartService {
  private Cart_item: any[] = [];
  constructor() {
    const cartItems = localStorage.getItem('cartItems');
    this.Cart_item = cartItems ? JSON.parse(cartItems) : [];
  }
  AddCart(product: any) {
    let dpl_index = this.Cart_item.findIndex(x => x.id === product.id);
    if (dpl_index > -1) {
      this.Cart_item[dpl_index].qty++;
    } else {
      product.qty = 1;
      product.is_selected = true;
      this.Cart_item.push(product);
    }
    localStorage.setItem('cartItems', JSON.stringify(this.Cart_item));
  }
  GetCartItems() {
    return this.Cart_item;
  }

  increaseQuantity(item: any) {
    let index = this.Cart_item.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      this.Cart_item[index].qty++;
      localStorage.setItem('cartItems', JSON.stringify(this.Cart_item));
    }
  }
  decreaseQuantity(item: any) {
    let index = this.Cart_item.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1 && this.Cart_item[index].qty > 1) {
      this.Cart_item[index].qty--;
      localStorage.setItem('cartItems', JSON.stringify(this.Cart_item));
    }
  }

  removeItem(item: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result: any) => {
      if (result.isConfirmed) {
        let index = this.Cart_item.findIndex(cartItem => cartItem.id === item.id);
        if (index !== -1) {
          this.Cart_item.splice(index, 1);
          localStorage.setItem('cartItems', JSON.stringify(this.Cart_item));
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

  }

  getCartTotal() {
    const total = this.Cart_item.reduce((acc, item) => {
      return acc + (item.is_selected ? item.price * item.qty : 0);
    }, 0);
    return total;
  }
  selectItem(item: any) {
    let index = this.Cart_item.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      this.Cart_item[index].is_selected = !this.Cart_item[index].is_selected;
      localStorage.setItem('cartItems', JSON.stringify(this.Cart_item));
    }
  }
  clearSelectedItems() {
    this.Cart_item = this.Cart_item.filter(item => !item.is_selected);
    localStorage.setItem('cartItems', JSON.stringify(this.Cart_item));
  }
}