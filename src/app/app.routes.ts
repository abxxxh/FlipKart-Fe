import { Routes } from '@angular/router';
import { Purchase } from './components/purchase/purchase/purchase';
import { Table } from './components/table/table/table';
import { Home } from './components/home/home';


export const routes: Routes = [
    {path:"",component:Home},
    {path:"purchase",component:Purchase},
    {path:"table",component:Table}
];
