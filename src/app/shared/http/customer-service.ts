import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Product {
  id: number;
  productName: string;
  price: number;
  brand: string;
  category: string;
  purchasedDate: string;
  customerDetailModelId: number;
}

interface Customer {
  id: number;
  name: string;
  email: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  product: Product;
}

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44332/api/FlipKart';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  getById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }

  postProductDetails(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  updateProductDetails(id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }
  deleteuser(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}