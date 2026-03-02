import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../http/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
constructor(private auth:Auth,private rt:Router){}

logout(){
  this.auth.logout();
  this.rt.navigate(['/login'])
}



}
