import { Component, ComponentRef, inject, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { CommonModule } from '@angular/common';
import { LeadFormComponent } from '../../lead-form/lead-form.component';
import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent, OverlayModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  readonly overlay = inject(Overlay);
  overlayRef?: OverlayRef;

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

  openModal(): void {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay
          .position()
          .global()
          .centerHorizontally()
          .centerVertically(),
      });
      const formPortal = new ComponentPortal(LeadFormComponent);

      const componentRef = this.overlayRef.attach(formPortal);

      componentRef.instance.closeOverlay = () => this.closeModal(componentRef);
      componentRef.instance.setIsOpen(true);
    }
  }

  closeModal(componentRef: ComponentRef<LeadFormComponent>): void {
    const overlayRef = this.overlayRef;
    if (overlayRef) {
      componentRef.instance.setIsOpen(false);

      setTimeout(() => {
        overlayRef.dispose();
        this.overlayRef = undefined;
      }, 150);
    }
  }
}
