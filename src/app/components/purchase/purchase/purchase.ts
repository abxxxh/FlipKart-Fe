import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../../../shared/http/customer-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './purchase.html',
  styleUrls: ['./purchase.css']
})
export class Purchase implements OnInit {

  purchaseForm: FormGroup;
  ProductId: null | number = null;

  constructor(
    private fb: FormBuilder,
    private http: CustomerService,
    private cdr: ChangeDetectorRef,
    private act: ActivatedRoute
  ) {
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

  ngOnInit(): void {
    this.ProductId = Number(this.act.snapshot.paramMap.get("id"));
    if (this.ProductId) {
      this.loadUserData();
    }
  }

  loadUserData() {
    if (this.ProductId === null) return;

    this.http.getById(this.ProductId).subscribe({
      next: (data: any) => {
        console.log(data, "get by id");
        this.purchaseForm.patchValue({
          name: data.name,
          email: data.email,
          address: data.address,
          city: data.city,
          country: data.country,
          phone: data.phone,
          productName: data.product?.productName || '',
          price: data.product?.price || '',
          brand: data.product?.brand || '',
          category: data.product?.category || '',
          purchasedDate: data.product?.purchasedDate
            ? data.product.purchasedDate.split('T')[0]
            : ''
        });
      },
      error: (e) => console.log(e, "get by id error")
    });
  }

  onSubmit() {
    if (this.purchaseForm.valid) {

      // Flat payload matching backend CustomerRequestDto
      const payload = {
        name: this.purchaseForm.value.name,
        email: this.purchaseForm.value.email,
        address: this.purchaseForm.value.address,
        city: this.purchaseForm.value.city,
        country: this.purchaseForm.value.country,
        phone: this.purchaseForm.value.phone,
        productName: this.purchaseForm.value.productName,
        price: this.purchaseForm.value.price,
        brand: this.purchaseForm.value.brand,
        category: this.purchaseForm.value.category,
        purchasedDate: this.purchaseForm.value.purchasedDate // or convert to ISO if needed
      };

      if (this.ProductId === null) {
        // POST
        this.http.postProductDetails(payload).subscribe({
          next: (d) => {
            console.log(d, "post successfully");
            this.purchaseForm.reset();
          },
          error: (e) => console.log(e, "post error")
        });
      } else {
        // PUT
        this.http.updateProductDetails(this.ProductId, payload).subscribe({
          next: (d) => {
            console.log(d, "put successfully");
            this.purchaseForm.reset();
          },
          error: (e) => console.log(e, "put error")
        });
      }

    } else {
      this.purchaseForm.markAllAsTouched();
    }
  }
}