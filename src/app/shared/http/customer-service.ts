import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  
  constructor(private http:HttpClient){}
apiUrl="https://localhost:44332/api/FlipKart"
getAllUsers(){

  return this.http.get(this.apiUrl)
}

getSpecificUser(id:number){

  return this.http.get(`${this.apiUrl}/${id}`);
}

postProductDetails(user:any){


  return this.http.post(`${this.apiUrl}`,user)

}

updateProductDetails(id:number,user:any){

  return this.http.put(`${this.apiUrl}/${id}`,user)
}




}
