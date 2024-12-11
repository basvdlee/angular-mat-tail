import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { LoginComponent } from './components/login.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
];
