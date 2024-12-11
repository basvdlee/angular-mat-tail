import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <div class="bg-surface w-full h-full p-4">
      <router-outlet />
    </div>
  `,
})
export class AppComponent {}
