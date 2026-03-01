import { CommonModule } from '@angular/common';
import { CustomerService } from './../../../shared/http/customer-service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnInit {
UserList:any[]=[]

 constructor(private http:CustomerService,private cdr:ChangeDetectorRef,private rt:Router){}


ngOnInit(): void {
  this.loadAllProducts()
  // this.cdr.detectChanges()
}
 
loadAllProducts(){

  this.http.getAllUsers().subscribe({
    next:(d:any)=>{
      this.UserList=d
      console.log(d)
       this.cdr.detectChanges()
    },error:(e)=>{
    console.log(e)
    }
  })
}

editUserDetails(id:number){
 this.rt.navigate(['/purchase',id])
}
deleteauser(id:number){
  this.http.deleteuser(id).subscribe({
    next:(d)=>{
    console.log(d)
    this.loadAllProducts();
    },error:(e)=>{
      console.log(e)
    }
  })
}






}
