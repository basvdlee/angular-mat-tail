import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { LoginComponent } from './components/login.component';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [
      () =>
        inject(AuthService).loggedIn() ||
        inject(Router).createUrlTree(['login']),
    ],
  },
];
