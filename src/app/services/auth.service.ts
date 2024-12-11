import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInSignal = signal(false);
  loggedIn = this.loggedInSignal.asReadonly();

  login() {
    this.loggedInSignal.set(true);
  }
}
