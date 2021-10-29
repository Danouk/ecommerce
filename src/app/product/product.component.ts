import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public urlpath: string;
  product:any = [];
  cart: any
  existing: any;

  constructor(
    public route: ActivatedRoute,
    public api: ApiService,
    public toastr: ToastrService
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

  addCart(product){
    console.log('product', product);
    this.existing = localStorage.getItem('productCart');
    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    this.existing = this.existing ? this.existing.split(',') : [];

    // Add new data to localStorage Array
    this.existing.push(product.id);

    // Save back to localStorage
    localStorage.setItem('productCart', this.existing);

    this.toastr.success( product.title , 'Producto Agregado  👌')

    console.log('sendata', this.existing.length);
    this.api.sendData(this.existing.length);


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
