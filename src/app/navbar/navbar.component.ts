import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  nameCategories : any = []

  constructor(
    private router : Router,
    private api: ApiService
    ) { }

  ngOnInit(): void {
    this.getNameCategories()

  }

  getNameCategories() {
    this.api.apiGetNameCategories().subscribe((data) => {
      this.nameCategories = data
      console.log('name', this.nameCategories)
    }) 
  }

}
