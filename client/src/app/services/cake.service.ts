import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cake } from '../interfaces/cake'

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  private myAppUrl:string;
  private myApiUrl:string;


  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/cakes'
   }

   getCakes(): Observable < Cake[]> {
    /*  const token = localStorage.getItem('token')
     const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`) */
    /*     return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`, { headers: headers } ) */
    return this.http.get< Cake[] >(`${this.myAppUrl}${this.myApiUrl}`)

   }
}
