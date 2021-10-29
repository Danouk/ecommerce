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
  product: any = []
  totalCart: number = 0
  tiene= false

  constructor(
    private router : Router,
    public route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {

    console.log('url', this.url)
    this.saveLocalstorage()

    this.getStorage();
  }

  saveLocalstorage(){
    localStorage.setItem('url', this.url.split('/')[1]);

  }

  getStorage(){
    console.log('get',localStorage.getItem('productCart'))
    if(localStorage.getItem('productCart')){
      console.log('items local', localStorage.getItem('productCart'))
      let guardado = localStorage.getItem('productCart');
      this.products = guardado.split(',')
      console.log('cant',this.products.length)
      this.tiene = true
      this.getProducts(this.products)
    }

    if(localStorage.getItem('user')){
      this.user = localStorage.getItem('user')
    } else {
      this.user = 'xxxx'
    }
  }

  getProducts(products){
    products.map(product => {
    this.api.apiGetProductId(product).subscribe(res => {
      this.product.push(res)
      this.totalCart = this.totalCart +res['price']
      console.log('total', this.totalCart)
      console.log('product', this.product, res)
    })
  })
}
  clearLocalStorageCart(){
    localStorage.removeItem('productCart')
    this.api.sendData(0)
    this.tiene = false

    // this.ngOnInit()
    
  }

}
