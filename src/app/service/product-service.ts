import { Injectable } from '@angular/core';
declare const axios: any;
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {

    let ng_this = this;

    $.LoadingOverlay("show");

    axios.get('https://fakestoreapi.com/products')
      .then(function (response: any) {
        ng_this.products = response.data;
        $.LoadingOverlay("hide");
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      })
      .finally(function () {

      });

    // Optionally the request above could also be done as
    axios.get('/user', {
      params: {
        ID: 12345
      }
    })
      .then(function (response: any) {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    // Want to use async/await? Add the `async` keyword to your outer function/method.
    async function getUser() {
      try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  private products: any[] = [];
  getProducts() {
    return this.products;
  }
}
