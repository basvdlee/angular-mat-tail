import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  template: `
    <form class="flex flex-col gap-4 max-w-xl mx-auto" (ngSubmit)="login()">
      <mat-form-field>
        <mat-label>Username</mat-label>
        <input matInput placeholder="Placeholder" />
      </mat-form-field>

      <mat-form-field>
        <mat-label>Password</mat-label>
        <input matInput type="password" placeholder="Placeholder" />
      </mat-form-field>
      <button mat-flat-button>Login</button>
    </form>
  `,
})
export class LoginComponent {
  private router = inject(Router);
  private auth = inject(AuthService);

  login() {
    this.auth.login();
    this.router.navigate(['/dashboard']);
  }
}
