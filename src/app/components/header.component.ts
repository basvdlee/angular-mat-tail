import { Component, effect, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule],
  template: `
    <mat-toolbar class="flex justify-between">
      <span>AngularMatTail</span>
      @if (darkMode()) {
      <mat-icon (click)="darkMode.set(!darkMode())">light_mode</mat-icon>
      } @else {
      <mat-icon (click)="darkMode.set(!darkMode())">dark_mode</mat-icon>
      }
    </mat-toolbar>
  `,
})
export class HeaderComponent {
  darkMode = signal(false);

  toggleDarkMode = effect(() => {
    document.documentElement.classList.toggle('dark', this.darkMode());
  });
}
