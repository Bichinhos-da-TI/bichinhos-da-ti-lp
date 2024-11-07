import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { FirstSectionComponent } from './first-section/first-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    ThemeToggleComponent,
    FirstSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bichinhos-da-ti-lp';
}
