import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private dataSource = new BehaviorSubject<any>(null);
  $dataSource = this.dataSource.asObservable();

  private apiProduct = "https://fakestoreapi.com/products/"
  private apiCategories = "https://fakestoreapi.com/products/categories"
  private apiProductsCategorie ="https://fakestoreapi.com/products/category/"


  constructor(
    private httpClient: HttpClient,
    ) { }

  public sendData(data: any){
    this.dataSource.next(data);
  }

  public apiGetNameCategories(){
    return this.httpClient.get(this.apiCategories)
  }

  public apiGetProductId(id: number){
    return this.httpClient.get(this.apiProduct + id)
  }

  public apiGetProductsCategorie(name: string){
    return this.httpClient.get(this.apiProductsCategorie + name)
  } 
}
