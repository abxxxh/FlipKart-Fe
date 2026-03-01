import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './purchase.html',
  styleUrls: ['./purchase.css']
})
export class Purchase {

  purchaseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.purchaseForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      productName: ['', Validators.required],
      price: ['', Validators.required],
      brand: ['', Validators.required],
      category: ['', Validators.required],
      purchasedDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.purchaseForm.valid) {
      console.log(this.purchaseForm.value);
      // Later you can call API here
    } else {
      this.purchaseForm.markAllAsTouched();
    }
  }
}