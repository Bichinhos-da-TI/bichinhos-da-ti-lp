import { Component } from '@angular/core';
@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css',
})
export class ThemeToggleComponent {
  isDarkTheme: boolean = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const body = document.body;
    if (this.isDarkTheme) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }
}
