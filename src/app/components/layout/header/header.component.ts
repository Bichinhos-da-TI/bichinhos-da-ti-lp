import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormOverlay } from 'src/app/lib/overlay/form-overlay';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent, OverlayModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  formOverlay = new FormOverlay();
  openModal = () => this.formOverlay.openModal();

  scrollToSection(sectionId: string): void {
    const section = this.document.getElementById(sectionId);
    if (section) {
      const offset = 100;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth',
      });
    } else {
      console.warn(`Section "${sectionId}" not found`);
    }
  }
}
