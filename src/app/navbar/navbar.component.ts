import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage, LocalStorageService } from 'ngx-store';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  nameCategories : any = []
  public url: string;
  cart = 0;

  constructor(
    private router : Router,
    private api: ApiService,
    ) { 
      
      }
    

  ngOnInit(): void {
    this.api.$dataSource.subscribe(data => {
      this.cart = data
      console.log(this.cart)

    })
    this.getNameCategories()
    this.cartStorage()
    console.log(this.cart)
  }



  getNameCategories() {
    this.api.apiGetNameCategories().subscribe((data) => {
      this.nameCategories = data
      console.log('name', this.nameCategories)
    }) 
  }

  cartStorage(){
    if(localStorage.getItem('productCart')){
      console.log('items local', localStorage.getItem('productCart'))
      let guardado = localStorage.getItem('productCart');
      this.cart = guardado.split(',').length


    }
  }

}
