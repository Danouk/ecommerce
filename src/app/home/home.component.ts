import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nameCategories: any = []
  public url: string = this.router.url;
  formName: FormGroup


  constructor(private api: ApiService,
    private router : Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,

    ) { }

  ngOnInit(): void {
  this.getNameCategories()
  console.log('url', this.url)
  this.saveLocalstorage()

  this.formName = this.formBuilder.group({
    user: ['', Validators.required]
  })
  }

  getNameCategories() {
    this.api.apiGetNameCategories().subscribe((data) => {
      this.nameCategories = data
      console.log('name', this.nameCategories)
    })
  }

  saveLocalstorage(){
    localStorage.setItem('url', this.url.split('/')[1]);
  }

  get name(){
    return this.formName.get('user')
    }

  enviar(){
    console.log(this.formName.value.user)
    localStorage.setItem('user', this.formName.value.user)
    console.log('cargado nombre user a local storage')
    this.toastr.success('Hola '+ this.formName.value.user+'  👋', 'Usuario cargado')
    this.formName.reset()

  }

}
