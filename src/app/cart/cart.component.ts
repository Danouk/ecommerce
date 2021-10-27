import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public url: string = this.router.url;
  user: any
  products: any
  product: any

  constructor(
    private router : Router,
    public route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {

    console.log('url', this.url)
    this.saveLocalstorage()
  }

  saveLocalstorage(){
    localStorage.setItem('url', this.url.split('/')[1]);

    this.getStorage();
  }

  getStorage(){
    if(localStorage.getItem('productCart')){
      console.log('items local', localStorage.getItem('productCart'))
      let guardado = localStorage.getItem('productCart');
      this.products = guardado.split(',')
      console.log('cant',this.products.length)
      this.getProducts(this.products)
    }

    if(localStorage.getItem('user')){
      this.user = localStorage.getItem('user')
    } else {
      this.user = 'xxxx'
    }
  }

  getProducts(products){
    this.products.map(product => {
    this.api.apiGetProductId(product).subscribe(res => {
      this.product = res
      console.log('product', this.product, res)
    })
  })
}

}
