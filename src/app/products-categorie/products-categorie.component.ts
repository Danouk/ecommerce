import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products-categorie',
  templateUrl: './products-categorie.component.html',
  styleUrls: ['./products-categorie.component.scss']
})
export class ProductsCategorieComponent implements OnInit {

public urlpath: string;
products:any = [];
existing: any;
  
  constructor(    
    private router : Router,
    public route: ActivatedRoute,
    public api: ApiService,
    private toastr: ToastrService,


    ) { 

    this.route.url.subscribe(url => {
      if (this.route.snapshot.paramMap.get('categorie')) {
        console.log('url', 'categorie', url[1].path);
        localStorage.setItem('url', this.route.snapshot.paramMap.get('categorie'));
      }
      this.ngOnInit();

    })

  }

  ngOnInit(): void {
    this.urlpath = localStorage.getItem('url');
    console.log('local', this.urlpath);
    this.getProducts();
    // this.url = this.router.url;
    // console.log(this.url.split('/')[2]);
    // this.saveLocalstorage();
  }

  ngAfterViewInit(){
  }

  getProducts(){
    this.api.apiGetProductsCategorie(this.urlpath).subscribe(
      (data) => {
        this.products = data;
        console.log('data', this.products);
      });
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



}
