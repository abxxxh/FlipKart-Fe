import { Routes } from '@angular/router';
import { Purchase } from './components/purchase/purchase/purchase';
import { Table } from './components/table/table/table';
import { Home } from './components/home/home';
import { Login } from './components/login/login/login';
import { authGuard } from './auth-guard';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'login', component: Login },

  { path: 'home', component: Home, canActivate: [authGuard] },
  { path: 'purchase', component: Purchase, canActivate: [authGuard] },
  { path: 'purchase/:id', component: Purchase, canActivate: [authGuard] },
  { path: 'table', component: Table, canActivate: [authGuard] },

  { path: '**', redirectTo: 'login' }
];
