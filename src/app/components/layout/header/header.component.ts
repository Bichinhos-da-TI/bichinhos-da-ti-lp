import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeToggleComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToSection(sectionId: string): void {
    const section = this.document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      console.warn(`Section "${sectionId}" not found`);
    }
  }
  isModalOpen: boolean = false;
  modalAnimation: 'enter-animation' | 'exit-animation' | '' = '';

  openModal(): void {
    this.modalAnimation = 'enter-animation';
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.modalAnimation = 'exit-animation';
    setTimeout(() => {
      this.isModalOpen = false;
      this.modalAnimation = '';
    }, 1000);
  }
}
