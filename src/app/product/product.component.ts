import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public urlpath: string;
  product:any = [];
  cart: any

  constructor(
    public route: ActivatedRoute,
    public api: ApiService,
  ) { 
    this.route.url.subscribe(url => {
      if (this.route.snapshot.paramMap.get('id')) {
        console.log('url', 'product', url[1].path);
        localStorage.setItem('idProduct', this.route.snapshot.paramMap.get('id'));
      }
      this.ngOnInit();

    })
  }

  ngOnInit(): void {
    this.urlpath = localStorage.getItem('idProduct');
    console.log('idProduct', this.urlpath);

    this.getProduct();
  }

  getProduct() {
    this.api.apiGetProductId(parseInt(this.urlpath)).subscribe(
      data => {
        this.product = data;
        console.log('data', data);
      },
      error => {
        console.log('error', error);
      }
    )
  }

  cartStorage(){
    if(localStorage.getItem('productCart')){
      console.log('items local', localStorage.getItem('productCart'))
      let guardado = localStorage.getItem('productCart');
      this.cart = guardado.split('},{')
      console.log(this.cart.length)

      
    }
    else{
      this.cart = ''
    }
  }

}
