import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
   apiUrl = 'https://localhost:44332/api/Auth';

   constructor(private http: HttpClient) { }

   login(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,data)
   }

   saveToken(token:string){
        localStorage.setItem('token',token)
   }
   getToken(){
    return localStorage.getItem(`token`)
   }
   logout(){
    localStorage.removeItem(`token`)
   }
}
