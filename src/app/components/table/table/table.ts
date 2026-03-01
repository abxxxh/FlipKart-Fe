import { CommonModule } from '@angular/common';
import { CustomerService } from './../../../shared/http/customer-service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnInit {
UserList:any[]=[]

 constructor(private http:CustomerService,private cdr:ChangeDetectorRef){}


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

}
