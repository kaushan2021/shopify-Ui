import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url="product";
  constructor(private http:HttpClient) { }

  public getProduts():Observable<product[]>{
      return this.http.get<product[]>(`${environment.apiUrl}/${this.url}`);
  }
}
