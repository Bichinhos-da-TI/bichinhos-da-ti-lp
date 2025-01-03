import { Component, ComponentRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { SectionDividerComponent } from '../layout/section-divider/section-divider.component';
import { LeadFormComponent } from '../lead-form/lead-form.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, SectionDividerComponent, OverlayModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly overlay = inject(Overlay);
  overlayRef?: OverlayRef;

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
