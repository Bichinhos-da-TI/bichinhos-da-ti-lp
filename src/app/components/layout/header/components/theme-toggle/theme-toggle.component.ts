import { Component } from '@angular/core';

@Component({
  selector: 'header-theme-toggle',
  standalone: true,
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css'],
})
export class ThemeToggleComponent {
  isDarkTheme: boolean = true;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const body = document.body;

    if (this.isDarkTheme) {
      body.classList.add('dark');
      body.classList.remove('light');
    } else {
      body.classList.add('light');
      body.classList.remove('dark');
    }
  }
}
