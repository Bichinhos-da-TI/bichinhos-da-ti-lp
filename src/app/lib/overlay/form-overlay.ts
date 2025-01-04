import { ComponentRef, inject } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LeadFormComponent } from 'src/app/components/lead-form/lead-form.component';
import { ModalStateService } from './form-overlay.service';

export class FormOverlay {
  private readonly overlay = inject(Overlay);
  private readonly modalStateService = inject(ModalStateService);
  private overlayRef?: OverlayRef;

  openModal(): void {
    const isOpen = this.modalStateService.getModalState();

    if (isOpen) return;

    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
    const formPortal = new ComponentPortal(LeadFormComponent);

    const componentRef = this.overlayRef.attach(formPortal);

    this.modalStateService.setModalOpen();

    componentRef.instance.closeOverlay = () => this.closeModal(componentRef);
    componentRef.instance.setIsOpen(true);
  }

  closeModal(componentRef: ComponentRef<LeadFormComponent>): void {
    if (!this.overlayRef) return;

    componentRef.instance.setIsOpen(false);

    setTimeout(() => {
      this.overlayRef?.dispose();
      this.overlayRef = undefined;
      this.modalStateService.setModalClosed();
    }, 150);
  }
}
