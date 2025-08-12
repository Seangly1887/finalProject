import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
declare const axios: any;

@Component({
  selector: 'app-detail',
  imports: [RouterLink],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail {
  constructor(private route: ActivatedRoute) { }
  product: any = {};
  ngOnInit() {

    const proId = this.route.snapshot.queryParamMap.get('id');

    let ng_this = this;

    // $('#productList').LoadingOverlay("show");
    axios.get(`https://fakestoreapi.com/products/${proId}`)
      .then(function (response: any) {
        ng_this.product = response.data;

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
}


