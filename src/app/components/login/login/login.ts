import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../../shared/http/auth';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
     console.log(this.loginForm.value)
    this.auth.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        this.auth.saveToken(res.token);
        alert('Login Success');
       
        this.router.navigate(['/']);
      },
      error: () => {
        alert('Invalid Credentials');
      }
    });
  }
  
}
