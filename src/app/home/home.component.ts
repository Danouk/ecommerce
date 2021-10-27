import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nameCategories: any = []

  constructor(private api: ApiService) { }

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
